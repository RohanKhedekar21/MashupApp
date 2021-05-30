import AsyncStorage from "@react-native-async-storage/async-storage"

export const setStorage = async (key, data) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
}

export const getStorage = async (key) => {
    let data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
}

export const clearStorage = async () => {
    await AsyncStorage.clear();
}