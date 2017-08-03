import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBeX_oSTAP1F5wDyuKetSufo8LBmDmuCAU",
    authDomain: "e-sample-bef54.firebaseapp.com",
    databaseURL: "https://e-sample-bef54.firebaseio.com/",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(appFirebase);
const database = firebase.database(appFirebase);

export { auth, database };