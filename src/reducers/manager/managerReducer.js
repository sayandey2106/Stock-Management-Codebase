import {
    RESET_MANAGER,
    SET_MANAGER_DEPARTMENT,
    SET_MANAGER_EMAIL, SET_MANAGER_EMPLOYEE_ID,
    SET_MANAGER_NAME, SET_MANAGER_PASSWORD, SET_MANAGER_POSITION, SET_MANAGER_PROFILE,
    SET_ALL_MANAGER
} from "../../constants/manager/managerConstants";
const initial_state = {
    all_manager:[],
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
        case SET_ALL_MANAGER:
            return state = { ...state, all_manager: action.payload };
        case SET_MANAGER_NAME:
            return state = { ...state, name: action.payload };
        case SET_MANAGER_PROFILE:
            return state = { ...state, profile: action.payload };
        case SET_MANAGER_EMAIL:
            return state = { ...state, email: action.payload };
        case SET_MANAGER_PASSWORD:
            return state = { ...state, password: action.payload };
        case SET_MANAGER_POSITION:
            return state = { ...state, position: action.payload };
        case SET_MANAGER_DEPARTMENT:
            return state = { ...state, department: action.payload };
        case SET_MANAGER_EMPLOYEE_ID:
            return state = { ...state, employee_id: action.payload };
        case RESET_MANAGER:
            return state = { ...state, name:"", profile: "", email: "", password: "", position: "", department: "", employee_id: ""};
        default:
            return state;
    }
}