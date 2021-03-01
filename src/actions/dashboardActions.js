import {
    SET_DASHBOARD_DATA
} from "../constants/dashboardConstants";
import UNIVERSAL from "../../config/config";
import {setLoader, unsetLoader}
    from "../loader/loaderAction";
import {set_snack_bar} from "../snackbar/snackbar_action";
import {onLogout} from '../loginActions'



export function set_dashboard_data(payload) {
    console.log(payload)
    return {
        type: SET_DASHBOARD_DATA,
        payload: payload
    }
}
