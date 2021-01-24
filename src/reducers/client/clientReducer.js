import {
    RESET_CLIENT,
    SET_CLIENT_EMAIL,
    SET_CLIENT_NAME,
    SET_CLIENT_PROFILE,
    SET_ALL_CLIENT,
    SET_CLIENT_CONTACT_NUM,
    SET_CLIENT_ADDRESS,
    SET_CLIENT_PAN_NUM,
    SET_CLIENT_AADHAR_NUM,
    SET_CLIENT_CLIENT_SOURCE, SET_CLIENT_COLOR
} from "../../constants/client/clientConstants";
const initial_state = {
    all_client:[],
    name:"",
    profile:"",
    email:"",
    contact_num:"",
    address:"",
    pan_num:"",
    aadhar_num: "",
    client_source: "",
    client_color:""
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
        case SET_CLIENT_CONTACT_NUM:
            return state = { ...state, contact_num: action.payload };
        case SET_CLIENT_ADDRESS:
            return state = { ...state, address: action.payload };
        case SET_CLIENT_PAN_NUM:
            return state = { ...state, pan_num: action.payload };
        case SET_CLIENT_AADHAR_NUM:
            return state = { ...state, aadhar_num: action.payload };
        case SET_CLIENT_CLIENT_SOURCE:
            return state = { ...state, client_source: action.payload };
        case SET_CLIENT_COLOR:
            return state = { ...state, client_source: action.payload };
        case RESET_CLIENT:
            return state = { ...state, name:"", profile: "", email: "", contact_num: "", address: "", pan_num: "", aadhar_num: "", client_source: ""};
        default:
            return state;
    }
}
