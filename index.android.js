import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import * as firebase from 'firebase';
import App from './App/Containers/App'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBeX_oSTAP1F5wDyuKetSufo8LBmDmuCAU",
    authDomain: "e-sample-bef54.firebaseapp.com",
    databaseURL: "https://e-sample-bef54.firebaseio.com/",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('esample', () => App)
