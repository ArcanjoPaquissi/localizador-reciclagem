import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { point } = route.params;

  return (
    <View style={styles.container}>
      {point.image && <Image source={{ uri: point.image }} style={styles.image} />}
      <Text style={styles.title}>{point.name}</Text>
      <Text style={styles.subtitle}>Tipo: {point.type}</Text>
      <Text>Latitude: {point.location.latitude.toFixed(5)}</Text>
      <Text>Longitude: {point.location.longitude.toFixed(5)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginTop: 15 },
  subtitle: { fontSize: 16, marginVertical: 10 },
  image: { width: "100%", height: 200, borderRadius: 10 },
});
