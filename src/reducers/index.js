import {combineReducers} from "redux";
import loader from "./loader/loader_reducer";
import login from "../reducers/login-reducer";
import request from "./request/requestReducer";
import dashboard from "../reducers/dashboard/dashboardReducer"
import profile from "../reducers/profile/profileReducer"
import signup from  "../reducers/signup/signupReducer";
import editProfile from "../reducers/profile/editProfileReducer"

import adminSignup from "../reducers/signup/adminSignupReducer"

export default combineReducers({
    loader,
   
    login,
   
    request,
    dashboard,

    profile,
    signup,
    editProfile,
    adminSignup
});
