import { 
    ActivityIndicator, 
    Alert, 
    FlatList, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { API_URL } from "../config/api";

const REQUEST_TIMEOUT_MS = 8000;

export default function ListaTarefas({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [recarregando, setRecarregando] = useState(false);
    const [erro, setErro] = useState(null);

    async function fetchWithTimeout(url, options = {}, timeoutMs = REQUEST_TIMEOUT_MS) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            return response;
        } finally {
            clearTimeout(timeoutId);
        }
    }

    async function getTasks(isPullToRefresh = false) {
        try {
            setErro(null);
            if (isPullToRefresh) {
                setRecarregando(true);
            } else if (tasks.length === 0) {
                setCarregando(true);
            }

            const resposta = await fetchWithTimeout(`${API_URL}/tarefas`);
            if (!resposta.ok) {
                throw new Error(`O servidor respondeu com status ${resposta.status}`);
            }

            const dados = await resposta.json();
            setTasks(Array.isArray(dados) ? dados : []);
        } catch (err) {
            const mensagem = err.name === "AbortError"
                ? "Tempo limite esgotado ao conectar com a API."
                : `Não foi possível carregar as tarefas: ${err.message}`;
            setErro(mensagem);
            console.log(`Erro no getTasks: ${err.message}`);
        } finally {
            setCarregando(false);
            setRecarregando(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            getTasks();
        }, [])
    );

    async function alternarConcluida(tarefa) {
        const novoStatus = !tarefa.concluida;
        const estadoAnterior = tasks;

        // Atualização otimista na interface
        setTasks((atuais) =>
            atuais.map((t) => (t.id === tarefa.id ? { ...t, concluida: novoStatus } : t))
        );

        try {
            // Tenta enviar PATCH; se a API não suportar PATCH, faz fallback para PUT
            let resposta = await fetchWithTimeout(`${API_URL}/tarefas/${tarefa.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ concluida: novoStatus }),
            });

            if (!resposta.ok) {
                resposta = await fetchWithTimeout(`${API_URL}/tarefas/${tarefa.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...tarefa,
                        concluida: novoStatus,
                    }),
                });
            }

            if (!resposta.ok) {
                throw new Error(`Status ${resposta.status}`);
            }
        } catch (err) {
            console.log(`Erro ao alternar status da tarefa: ${err.message}`);
            // Reverte em caso de falha
            setTasks(estadoAnterior);
            Alert.alert("Erro", "Não foi possível atualizar o status da tarefa no servidor.");
        }
    }

    async function excluirTarefa(id) {
        Alert.alert(
            "Excluir Tarefa",
            "Deseja realmente remover esta tarefa?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: async () => {
                        const estadoAnterior = tasks;
                        setTasks((atuais) => atuais.filter((t) => t.id !== id));

                        try {
                            const resposta = await fetchWithTimeout(`${API_URL}/tarefas/${id}`, {
                                method: "DELETE",
                            });

                            if (!resposta.ok) {
                                throw new Error(`Status ${resposta.status}`);
                            }
                        } catch (err) {
                            console.log(`Erro ao excluir tarefa: ${err.message}`);
                            setTasks(estadoAnterior);
                            Alert.alert("Erro", "Não foi possível excluir a tarefa no servidor.");
                        }
                    },
                },
            ]
        );
    }

    if (carregando) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#2563EB" />
                <Text style={styles.loadingText}>Carregando tarefas...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {erro && (
                <View style={styles.errorBox}>
                    <Text style={styles.errorText}>{erro}</Text>
                    <TouchableOpacity style={styles.retryButton} onPress={() => getTasks()}>
                        <Text style={styles.retryButtonText}>Tentar novamente</Text>
                    </TouchableOpacity>
                </View>
            )}

            <FlatList
                data={tasks}
                keyExtractor={(item) => String(item.id ?? Math.random())}
                contentContainerStyle={styles.listContent}
                refreshing={recarregando}
                onRefresh={() => getTasks(true)}
                ListEmptyComponent={
                    !erro ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyTitle}>Nenhuma tarefa cadastrada</Text>
                            <Text style={styles.emptySubtitle}>
                                Toque no botão abaixo para adicionar sua primeira tarefa.
                            </Text>
                        </View>
                    ) : null
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <TouchableOpacity
                            style={styles.cardHeader}
                            onPress={() => alternarConcluida(item)}
                            activeOpacity={0.7}
                        >
                            <View style={[styles.checkbox, item.concluida && styles.checkboxConcluida]}>
                                {item.concluida && <Text style={styles.checkboxCheck}>✓</Text>}
                            </View>

                            <View style={styles.cardInfo}>
                                <Text
                                    style={[
                                        styles.taskTitle,
                                        item.concluida && styles.taskTitleConcluida,
                                    ]}
                                >
                                    {item.titulo}
                                </Text>
                                {item.descricao ? (
                                    <Text style={styles.taskDescription} numberOfLines={2}>
                                        {item.descricao}
                                    </Text>
                                ) : null}
                            </View>

                            <View
                                style={[
                                    styles.statusBadge,
                                    item.concluida ? styles.statusConcluida : styles.statusPendente,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statusText,
                                        item.concluida
                                            ? styles.statusTextConcluida
                                            : styles.statusTextPendente,
                                    ]}
                                >
                                    {item.concluida ? "Concluída" : "Pendente"}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.cardActions}>
                            <TouchableOpacity
                                style={styles.toggleActionButton}
                                onPress={() => alternarConcluida(item)}
                            >
                                <Text style={styles.toggleActionText}>
                                    {item.concluida ? "Marcar como pendente" : "Marcar como concluída"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => excluirTarefa(item.id)}
                            >
                                <Text style={styles.deleteButtonText}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <View style={styles.footerContainer}>
                <TouchableOpacity
                    style={styles.fabButton}
                    onPress={() => navigation.navigate("NovaTarefa")}
                    activeOpacity={0.8}
                >
                    <Text style={styles.fabButtonText}>+ Nova Tarefa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        padding: 24,
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: "#4B5563",
        fontWeight: "500",
    },
    listContent: {
        padding: 16,
        paddingBottom: 90,
    },
    errorBox: {
        backgroundColor: "#FEE2E2",
        borderColor: "#FCA5A5",
        borderWidth: 1,
        borderRadius: 8,
        margin: 16,
        marginBottom: 0,
        padding: 14,
    },
    errorText: {
        color: "#B91C1C",
        fontSize: 14,
        marginBottom: 8,
    },
    retryButton: {
        alignSelf: "flex-start",
        backgroundColor: "#DC2626",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    retryButtonText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "600",
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 48,
        paddingHorizontal: 24,
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#374151",
        marginBottom: 6,
    },
    emptySubtitle: {
        fontSize: 14,
        color: "#6B7280",
        textAlign: "center",
        lineHeight: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#9CA3AF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
        marginTop: 2,
    },
    checkboxConcluida: {
        backgroundColor: "#10B981",
        borderColor: "#10B981",
    },
    checkboxCheck: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    cardInfo: {
        flex: 1,
        marginRight: 8,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#1F2937",
    },
    taskTitleConcluida: {
        textDecorationLine: "line-through",
        color: "#9CA3AF",
    },
    taskDescription: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 4,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    statusPendente: {
        backgroundColor: "#FEF3C7",
    },
    statusConcluida: {
        backgroundColor: "#D1FAE5",
    },
    statusText: {
        fontSize: 11,
        fontWeight: "700",
    },
    statusTextPendente: {
        color: "#D97706",
    },
    statusTextConcluida: {
        color: "#059669",
    },
    cardActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 14,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#F3F4F6",
    },
    toggleActionButton: {
        paddingVertical: 4,
    },
    toggleActionText: {
        color: "#2563EB",
        fontSize: 13,
        fontWeight: "600",
    },
    deleteButton: {
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    deleteButtonText: {
        color: "#DC2626",
        fontSize: 13,
        fontWeight: "600",
    },
    footerContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: "#F3F4F6",
    },
    fabButton: {
        backgroundColor: "#2563EB",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#2563EB",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    fabButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
});