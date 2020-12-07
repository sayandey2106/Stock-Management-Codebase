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
  apiKey: "AIzaSyDAYepm9F5Z4M7WtirzHDFfwLh166CJqng",
  authDomain: "taxopliance-5dd90.firebaseapp.com",
  databaseURL: "https://taxopliance-5dd90.firebaseio.com",
  projectId: "taxopliance-5dd90",
  storageBucket: "taxopliance-5dd90.appspot.com",
  messagingSenderId: "18175422347",
  appId: "1:18175422347:web:7bb8bf3c43bbcc4206498e",
  measurementId: "G-TEDTTC6JYV"
};
export const fb = firebase.initializeApp(firebaseConfig);