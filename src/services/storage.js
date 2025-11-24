import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@points";

export async function getPoints() {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export async function savePoint(point) {
  try {
    const existing = await getPoints();
    existing.push(point);
    await AsyncStorage.setItem(KEY, JSON.stringify(existing));
  } catch (e) {
    console.log(e);
  }
}
