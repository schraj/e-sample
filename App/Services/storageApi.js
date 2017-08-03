import { AsyncStorage } from 'react-native';
const SETTINGS_KEY = 'ESampleSettings';

const saveSettings = (data) => {
    AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(data));
}

const getSettings = () => {
    AsyncStorage.getItem(SETTINGS_KEY).then((settingsStr) => {
        return JSON.parse(settingsStr)
    })
}
