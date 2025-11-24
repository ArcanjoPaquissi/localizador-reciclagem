import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import PointCard from "../components/PointCard";
import { getPoints } from "../services/storage";

export default function ListScreen({ navigation }) {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getPoints();
      setPoints(data);
    };
    const unsubscribe = navigation.addListener("focus", load);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={points}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <PointCard
            point={item}
            onPress={() => navigation.navigate("Detalhes", { point: item })}
          />
        )}
      />
    </View>
  );
}
