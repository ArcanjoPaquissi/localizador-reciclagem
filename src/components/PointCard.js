import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function PointCard({ point, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {point.image && <Image source={{ uri: point.image }} style={styles.image} />}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{point.name}</Text>
        <Text style={styles.type}>{point.type}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    alignItems: "center",
  },
  image: { width: 70, height: 70, borderRadius: 8, marginRight: 10 },
  title: { fontSize: 16, fontWeight: "bold" },
  type: { fontSize: 14, color: "#555" },
});
