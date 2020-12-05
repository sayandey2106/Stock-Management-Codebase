import {
    RESET_EXECUTIVE,
    SET_EXECUTIVE_DEPARTMENT,
    SET_EXECUTIVE_EMAIL, SET_EXECUTIVE_EMPLOYEE_ID,
    SET_EXECUTIVE_NAME, SET_EXECUTIVE_PASSWORD, SET_EXECUTIVE_POSITION, SET_EXECUTIVE_PROFILE,
    SET_ALL_EXECUTIVE
} from "../../constants/executive/executiveConstants";
const initial_state = {
    all_executive:[],
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
        case SET_ALL_EXECUTIVE:
            return state = { ...state, all_executive: action.payload };
        case SET_EXECUTIVE_NAME:
            return state = { ...state, name: action.payload };
        case SET_EXECUTIVE_PROFILE:
            return state = { ...state, profile: action.payload };
        case SET_EXECUTIVE_EMAIL:
            return state = { ...state, email: action.payload };
        case SET_EXECUTIVE_PASSWORD:
            return state = { ...state, password: action.payload };
        case SET_EXECUTIVE_POSITION:
            return state = { ...state, position: action.payload };
        case SET_EXECUTIVE_DEPARTMENT:
            return state = { ...state, department: action.payload };
        case SET_EXECUTIVE_EMPLOYEE_ID:
            return state = { ...state, employee_id: action.payload };
        case RESET_EXECUTIVE:
            return state = { ...state, name:"", profile: "", email: "", password: "", position: "", department: "", employee_id: ""};
        default:
            return state;
    }
}