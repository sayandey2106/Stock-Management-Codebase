import {
    SET_ADMIN_DEPARTMENT,
    SET_ADMIN_EMAIL, SET_ADMIN_EMPLOYEE_ID,
    SET_ADMIN_NAME, SET_ADMIN_PASSWORD, SET_ADMIN_POSITION, SET_ADMIN_PROFILE,
    SET_ALL_ADMIN
} from "../../constants/admin/adminConst";
const initial_state = {
    all_admin:[],
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
        case SET_ALL_ADMIN:
            return state = { ...state, all_admin: action.payload };
        case SET_ADMIN_NAME:
            return state = { ...state, name: action.payload };
        case SET_ADMIN_PROFILE:
            return state = { ...state, profile: action.payload };
        case SET_ADMIN_EMAIL:
            return state = { ...state, email: action.payload };
        case SET_ADMIN_PASSWORD:
            return state = { ...state, password: action.payload };
        case SET_ADMIN_POSITION:
            return state = { ...state, position: action.payload };
        case SET_ADMIN_DEPARTMENT:
            return state = { ...state, department: action.payload };
        case SET_ADMIN_EMPLOYEE_ID:
            return state = { ...state, employee_id: action.payload };
        default:
            return state;
    }
}