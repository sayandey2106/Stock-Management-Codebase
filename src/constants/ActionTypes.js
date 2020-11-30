import firebase from "firebase";

export const RESET = "RESET";
export const CLEAR_LOGIN = "CLEAR_LOGIN";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const LOGIN = "LOGIN";
export const SET_NAME = "SET_NAME";
export const LOGOUT = "LOGOUT";
export const HANDLEDRAWER = "HANDLEDRAWER";
export const SET_HOME = "SET_HOME";
export const HANDLEDRAWER1 = "HANDLEDRAWER1";
export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";

export const firebaseConfig = {
  apiKey: "AIzaSyDRu-0LRSEY4_A5xV3akLse3AjTNyKwFbw",
  authDomain: "skyyrider-36fe0.firebaseapp.com",
  databaseURL: "https://skyyrider-36fe0.firebaseio.com",
  projectId: "skyyrider-36fe0",
  storageBucket: "skyyrider-36fe0.appspot.com",
  messagingSenderId: "109960021698",
  appId: "1:109960021698:web:4ae48a844f8415e478dd5b",
  measurementId: "G-ZSXZ2CCLSZ"
};
export const fb = firebase.initializeApp(firebaseConfig);