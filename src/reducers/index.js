import {combineReducers} from "redux";
import loader from "./loader/loader_reducer";
import snackbar from "./snackbar/snackbar_reducer";
import login from "../reducers/login-reducer";
import category from "./category/categoryReducer";
import request from "./request/requestReducer";
import user from "./user/userReducer";
import dashboard from "../reducers/dashboard/dashboardReducer"
import profile from "../reducers/profile/profileReducer"
import signup from  "../reducers/signup/signupReducer"

export default combineReducers({
    loader,
    snackbar,
    login,
    category,
    request,
    dashboard,
    user,
    profile,
    signup,
});
