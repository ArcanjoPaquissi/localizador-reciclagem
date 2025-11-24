import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>♻️ Localizador de Reciclagem</Text>
      <Text style={styles.subtitle}>
        Encontre pontos de descarte sustentável perto de você
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Mapa")}
      >
        <Text style={styles.buttonText}>Ver Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Novo Ponto")}
      >
        <Text style={styles.buttonText}>Cadastrar Novo Ponto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.navigate("Lista")}
      >
        <Text style={styles.buttonOutlineText}>Lista de Pontos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 30, color: "#666", textAlign: "center" },
  button: {
    backgroundColor: "#2e7d32",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
    width: "80%",
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
  buttonOutline: {
    borderColor: "#2e7d32",
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: "80%",
  },
  buttonOutlineText: { color: "#2e7d32", textAlign: "center", fontSize: 16 },
});
