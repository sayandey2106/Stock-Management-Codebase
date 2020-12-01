import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_NAME,
  LOGIN,
  LOGOUT,
  HANDLEDRAWER,
  HANDLEDRAWER1,
  SET_HOME,
  CLEAR_LOGIN,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL
} from "../constants/ActionTypes";
const initial_state = {
  email: "taxo@gmail.com",
  isHome: false,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDYyMzUxNzR9.5ZConmKlwrhE7cnvkMxoUauxCtnYekjEDSwdum20hL8",
  name: "taxo",
  // password: "",
  // confirmpassword: "",
  // newpassword: "",
  type: "A",
  // isRegistered: false,
  // response_received: false,
  // isPasswordchange: false,
  // message: "",
  profile_img: "",
  mobileOpen: false,
  user_id: "",
  departments: [],
  loginModal: false
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state = { ...state, email: action.payload };
    case SET_PASSWORD:
      return state = { ...state, password: action.payload };
    case SET_NAME:
      return state = { ...state, name: action.payload };
    case CLEAR_LOGIN:
      return state = { ...state, email: "", password: "" };
    case LOGIN:
      return state = {
        ...state,
        isHome: false,
        type: action.payload.type,
        token: action.payload.user_token,
        name: action.payload.name,
        profile_img: action.payload.profile_pic,
        user_id: action.payload._id,
      };
    case LOGOUT:
      return state = {
        ...state,
        token: "",
        type: "",
        email: "",
        password: "",
        user_id:"",
        isHome:true
      };
    case HANDLEDRAWER:
      return state = { ...state, mobileOpen: action.payload };
    case HANDLEDRAWER1:
      return state = { ...state, data: action.payload };
    case SET_HOME:
      return state = { ...state, isHome: true };
    case OPEN_LOGIN_MODAL:
      return { ...state, loginModal: true };
    case CLOSE_LOGIN_MODAL:
      return { ...state, loginModal:false };
    default:
      return state;
  }
}