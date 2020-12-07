import { combineReducers } from "redux";
import loader from "./loader/loader_reducer";
import snackbar from "./snackbar/snackbar_reducer";
import login from "./login-reducer";
import admin from "./admin/adminReducer"
import manager from './manager/managerReducer'
import executive from './executive/executiveReducer'
import majorhead from './majorhead/majorheadReducer'
export default combineReducers({
  loader,
  snackbar,
  login,
  admin,
  manager,
  executive,
  majorhead
});
