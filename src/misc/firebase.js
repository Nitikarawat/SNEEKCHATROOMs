import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCfsIltklKQbJoUZbsZqrzK6DRRJH4HFOg",
  authDomain: "sneek-chatroom.firebaseapp.com",
  databaseURL: "https://sneek-chatroom-default-rtdb.firebaseio.com",
  projectId: "sneek-chatroom",
  storageBucket: "sneek-chatroom.appspot.com",
  messagingSenderId: "218096607170",
  appId: "1:218096607170:web:996ebb98a77d5f79fc405b"
};

// Initialize Firebase
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();