import {combineReducers} from "redux";
import loader from "./loader/loader_reducer";
import snackbar from "./snackbar/snackbar_reducer";
import login from "./login-reducer";
import admin from "./admin/adminReducer"
import manager from './manager/managerReducer'
import executive from './executive/executiveReducer';
import client from './client/clientReducer';
import majorhead from './majorhead/majorheadReducer';
import minorhead from './minorheads/minorheadReducer';
import jobcard from './jobcard/jobcardReducer'
// import client from './client/clientReducer'
export default combineReducers({
    loader,
    snackbar,
    login,
    admin,
    manager,
    executive,
    majorhead,
    minorhead,
    client,
    jobcard
});
