import {combineReducers} from "redux";
import loader from "./loader/loader_reducer";
import snackbar from "./snackbar/snackbar_reducer";
import login from "./login-reducer";
import category from "./category/categoryReducer";
import request from "./request/requestReducer";
import user from "./user/userReducer";
import dashboard from "./dashboard/dashboardReducer"

export default combineReducers({
    loader,
    snackbar,
    login,
    category,
    request,
    dashboard,
    user
});
