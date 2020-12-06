import {
    RESET_CLIENT,
    SET_CLIENT_DEPARTMENT,
    SET_CLIENT_EMAIL, SET_CLIENT_EMPLOYEE_ID,
    SET_CLIENT_NAME, SET_CLIENT_PASSWORD, SET_CLIENT_POSITION, SET_CLIENT_PROFILE,
    SET_ALL_CLIENT
} from "../../constants/client/clientConstants";
const initial_state = {
    all_client:[],
    name:"",
    profile:"",
    email:"",
    password:"",
    position:"",
    department:"",
    employee_id: ""
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_CLIENT:
            return state = { ...state, all_client: action.payload };
        case SET_CLIENT_NAME:
            return state = { ...state, name: action.payload };
        case SET_CLIENT_PROFILE:
            return state = { ...state, profile: action.payload };
        case SET_CLIENT_EMAIL:
            return state = { ...state, email: action.payload };
        case SET_CLIENT_PASSWORD:
            return state = { ...state, password: action.payload };
        case SET_CLIENT_POSITION:
            return state = { ...state, position: action.payload };
        case SET_CLIENT_DEPARTMENT:
            return state = { ...state, department: action.payload };
        case SET_CLIENT_EMPLOYEE_ID:
            return state = { ...state, employee_id: action.payload };
        case RESET_CLIENT:
            return state = { ...state, name:"", profile: "", email: "", password: "", position: "", department: "", employee_id: ""};
        default:
            return state;
    }
}