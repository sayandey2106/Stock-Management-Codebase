import {
    SET_JOBCARD_NAME,
    SET_ALL_JOBCARD, SET_JOBCARD_CLIENT_ID, SET_JOBCARD_FIRM_ID, SET_JOBCARD_MAJORHEAD_ID, SET_JOBCARD_MINORHEAD_ID,
    RESET_JOBCARD
} from "../../constants/jobcard/jobcardConstants";
const initial_state = {
    all_jobcard:[],
    name:"",
    client_id:"",
    firm_id:"",
    majorhead_id:"",
    minorhead_id:"",
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_JOBCARD:
            return state = { ...state, all_jobcard: action.payload };
        case SET_JOBCARD_NAME:
            return state = { ...state, name: action.payload };
        case SET_JOBCARD_CLIENT_ID:
            return state = { ...state, client_id: action.payload };
        case SET_JOBCARD_FIRM_ID:
            return state = { ...state, firm_id: action.payload };
        case SET_JOBCARD_MAJORHEAD_ID:
            return state = { ...state, majorhead_id: action.payload };
        case SET_JOBCARD_MINORHEAD_ID:
            return state = { ...state, minorhead_id: action.payload };
        case RESET_JOBCARD:
            return state = { ...state, name:"", client_id: "", firm_id: "", majorhead_id: "", minorhead_id: ""};
        default:
            return state;
    }
}