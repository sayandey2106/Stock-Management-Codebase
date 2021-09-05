import {
    SET_DASHBOARD_DATA, SET_TOTAL_USERS, SET_TOTAL_CONSUMPTION, SET_CONSUMPTION_PER_DAY, SET_CONSUMPTION_PER_MONTH,
    SET_COMPANY_BALANCE, SET_CORPORATE_REQUESTS, SET_USERS_CONSUMPTION, SET_CATEGORY_LIST
} from "../../constants/dashboard/dashboardConstants";

const initial_state = {
    get_dashboard_data:[],
    total_users: "",
    company_balance: "",
    total_consumption: "",
    consumption_per_month: "",
    consumption_per_day: "",
    corporate_requests: [],
    users_consumption: [],
};
export default function reducer(state = initial_state, action) {
    // console.log(action)
    switch (action.type) {
        case SET_DASHBOARD_DATA:
            return state = { ...state, get_dashboard_data: action.payload };
        case SET_TOTAL_USERS:
            return state = { ...state, total_users: action.payload };
        case SET_TOTAL_CONSUMPTION:
            return state = { ...state, total_consumption: action.payload };
        case SET_CONSUMPTION_PER_DAY:
            return state = { ...state, consumption_per_day: action.payload };
        case SET_CONSUMPTION_PER_MONTH:
            return state = { ...state, consumption_per_month: action.payload };
        case SET_COMPANY_BALANCE:
            return state = { ...state, company_balance: action.payload };
        case SET_CORPORATE_REQUESTS:
            return state = { ...state, corporate_requests: action.payload };
        case SET_USERS_CONSUMPTION:
            return state = { ...state, users_consumption: action.payload };

        default:
            return state;
    }
}
