import {
    SET_DASHBOARD_DATA
} from "../../constants/dashboardConstants";
const initial_state = {
    qb_dashboard:[],
};
export default function reducer(state = initial_state, action) {
    // console.log(action)
    switch (action.type) {
        case SET_DASHBOARD_DATA:
            return state = { ...state, qb_dashboard: action.payload };
        default:
            return state;
    }
}