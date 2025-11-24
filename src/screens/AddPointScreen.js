import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { savePoint } from "../services/storage";

export default function AddPointScreen({ navigation }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão de localização negada");
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!name || !type || !location) {
      alert("Preencha todos os campos.");
      return;
    }
    await savePoint({ name, type, image, location });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Ponto de Reciclagem</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Ponto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de resíduo (pilhas, óleo, eletrônico...)"
        value={type}
        onChangeText={setType}
      />
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Ponto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#0277bd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonSave: {
    backgroundColor: "#2e7d32",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  image: { width: "100%", height: 200, marginTop: 10, borderRadius: 8 },
});
