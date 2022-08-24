import AsyncStorage from '@react-native-async-storage/async-storage';

export const isString = (variable) => {
    return typeof variable === 'string' || variable instanceof String;
}

export const getItemFromStorage = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
        console.log(error);
    }
}

export const storeItemToStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch(error) {
        console.log(error);
    }
}

/* Start generate random hex color code functions from https://code.tutsplus.com/tutorials/how-to-code-a-random-color-generator-in-javascript--cms-39861. 
TODO: Is there a better way to achieve this? */
export const generateRandomHexColorCode = () => {
    console.log("Gen color");
    let [r,g,b] = randomRgbColor();
 
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
 
    return "#" + hr + hg + hb;
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
/* End generate random hex color code functions */

/* Start debug functions */
export const sleep = (ms) => {
    console.log("Sleeping for " , ms * 0.001 , " seconds...");
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const clearAsyncStorage = () => {
    console.log("Clearing async storage...");
    AsyncStorage.clear();
}

export const seeAsyncStorageContent = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const entries = await AsyncStorage.multiGet(keys);
    console.log("Async storage: ", entries);
}
/* End debug functions */
