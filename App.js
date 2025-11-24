import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import AddPointScreen from "./src/screens/AddPointScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ListScreen from "./src/screens/ListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mapa" component={MapScreen} />
        <Stack.Screen name="Novo Ponto" component={AddPointScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Lista" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
