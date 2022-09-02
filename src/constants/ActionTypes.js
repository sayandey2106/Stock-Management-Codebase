import firebase from "firebase/app";
import "firebase/storage"
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

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

const firebaseConfig = {
  apiKey: "AIzaSyC_xE_UhX9Kt2swPj7E9NzUkpdado3Zy-3fQ8",
  // authDomain: "skyyriderev.firebaseapp.com",
  projectId: "skyyriderev",
  storageBucket: "skyyriderev.appspot.com",
  messagingSenderId: "99935744531",
  appId: "1:99935744531:web:b23f6a555b96423283c5e6",
  measurementId: "G-9K26KZVH6L"
};

// export const app = initializeApp(firebaseConfig);
//  export const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const storage =firebase.storage();

export {storage,firebase as default};