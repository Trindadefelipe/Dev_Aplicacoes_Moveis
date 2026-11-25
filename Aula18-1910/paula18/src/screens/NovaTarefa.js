import { 
    ActivityIndicator, 
    Alert, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from "react-native";
import { useState } from "react";
import { API_URL } from "../config/api";

const REQUEST_TIMEOUT_MS = 8000;

export default function NovaTarefa({ navigation }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [enviando, setEnviando] = useState(false);

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

    async function saveTask() {
        const tituloFormatado = titulo.trim();
        const descricaoFormatada = descricao.trim();

        if (!tituloFormatado) {
            Alert.alert("Atenção", "O título da tarefa é obrigatório.");
            return;
        }

        setEnviando(true);

        try {
            const response = await fetchWithTimeout(`${API_URL}/tarefas`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    titulo: tituloFormatado,
                    descricao: descricaoFormatada,
                    concluida: false,
                }),
            });

            if (!response.ok) {
                const erroCorpo = await response.text().catch(() => "");
                throw new Error(`Status ${response.status}: ${erroCorpo}`);
            }

            Alert.alert("Sucesso", "Tarefa cadastrada com sucesso!", [
                {
                    text: "OK",
                    onPress: () => navigation.goBack(),
                },
            ]);
        } catch (erro) {
            console.log(`Erro ao salvar tarefa: ${erro.message}`);
            const mensagem = erro.name === "AbortError"
                ? "Tempo limite esgotado ao conectar com a API."
                : "Não foi possível salvar a tarefa no servidor. Verifique a conexão.";
            Alert.alert("Erro ao salvar", mensagem);
        } finally {
            setEnviando(false);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.card}>
                    <Text style={styles.formTitle}>Cadastrar Nova Tarefa</Text>
                    <Text style={styles.formSubtitle}>
                        Preencha os campos abaixo para adicionar uma nova tarefa à sua lista.
                    </Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>
                            Título <Text style={styles.required}>*</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex.: Estudar React Native"
                            placeholderTextColor="#9CA3AF"
                            value={titulo}
                            onChangeText={setTitulo}
                            editable={!enviando}
                            returnKeyType="next"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Descrição</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Ex.: Revisar hooks e componentes de navegação..."
                            placeholderTextColor="#9CA3AF"
                            value={descricao}
                            onChangeText={setDescricao}
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                            editable={!enviando}
                        />
                    </View>

                    <TouchableOpacity
                        style={[styles.submitButton, enviando && styles.buttonDisabled]}
                        onPress={saveTask}
                        disabled={enviando}
                        activeOpacity={0.8}
                    >
                        {enviando ? (
                            <ActivityIndicator color="#FFFFFF" />
                        ) : (
                            <Text style={styles.submitButtonText}>Salvar Tarefa</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => navigation.goBack()}
                        disabled={enviando}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.cancelButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        backgroundColor: "#F3F4F6",
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 16,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    formTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1F2937",
        marginBottom: 4,
    },
    formSubtitle: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 20,
        lineHeight: 20,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#374151",
        marginBottom: 6,
    },
    required: {
        color: "#DC2626",
    },
    input: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        color: "#1F2937",
        backgroundColor: "#F9FAFB",
    },
    textArea: {
        minHeight: 90,
    },
    submitButton: {
        backgroundColor: "#2563EB",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    submitButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
    cancelButton: {
        marginTop: 12,
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#F3F4F6",
    },
    cancelButtonText: {
        color: "#4B5563",
        fontSize: 15,
        fontWeight: "600",
    },
});