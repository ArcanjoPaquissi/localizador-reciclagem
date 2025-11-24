import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { getPoints } from "../services/storage";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão negada para acessar a localização.");
        setLoading(false);
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      setLoading(false);
    })();

    const loadPoints = async () => {
      const data = await getPoints();
      setPoints(data);
    };
    const unsubscribe = navigation.addListener("focus", loadPoints);
    return unsubscribe;
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#2e7d32" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          <Marker
            coordinate={location}
            title="Você está aqui"
            pinColor="green"
          />
          {points.map((p, index) => (
            <Marker
              key={index}
              coordinate={p.location}
              title={p.name}
              description={p.type}
              onPress={() => navigation.navigate("Detalhes", { point: p })}
            />
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
