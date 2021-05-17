import {
    SET_DASHBOARD_DATA
} from "../../constants/dashboard/dashboardConstants";

const initial_state = {
    get_dashboard_data:[],
};
export default function reducer(state = initial_state, action) {
    // console.log(action)
    switch (action.type) {
        case SET_DASHBOARD_DATA:
            return state = { ...state, get_dashboard_data: action.payload };
        default:
            return state;
    }
}
