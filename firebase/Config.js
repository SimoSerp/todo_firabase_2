import firebase from "firebase/compat";

const firebaseConfig = ({
    apiKey: "AIzaSyDTdGfffdSUpw-SHZgcKLZOFE2VRxtS6d0",
    authDomain: "react-native-todo-demo-7a412.firebaseapp.com",
    projectId: "react-native-todo-demo-7a412",
    storageBucket: "react-native-todo-demo-7a412.appspot.com",
    messagingSenderId: "240732309953",
    appId: "1:240732309953:web:470b31473ea03fe8fbc740",
    databaseURL: "https://react-native-todo-demo-7a412-default-rtdb.europe-west1.firebasedatabase.app/"
});

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const ROOT_REF = '/todos';