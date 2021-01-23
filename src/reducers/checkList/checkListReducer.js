import {
    SET_ALL_CHECKLIST,SET_CHECKLIST_CHECKLIST,SET_CHECKLIST_MAJORHEAD_ID,
    SET_CHECKLIST_MINORHEAD_ID,SET_CHECKLIST_NAME,RESET_CHECKLIST
} from "../../constants/checkList/checkListContants";
const initial_state = {
    all_checkList:[],
    name:"",
    client_id:"",
    firm_id:"",
    majorhead_id:"",
    minorhead_id:"",
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_CHECKLIST:
            return state = { ...state, all_checkList: action.payload };
        case SET_CHECKLIST_NAME:
            return state = { ...state, name: action.payload };
        case SET_CHECKLIST_MAJORHEAD_ID:
            return state = { ...state, client_id: action.payload };
        case SET_CHECKLIST_MINORHEAD_ID:
            return state = { ...state, firm_id: action.payload };
        case SET_CHECKLIST_CHECKLIST:
            return state = { ...state, majorhead_id: action.payload };
        case RESET_CHECKLIST:
            return state = { ...state, name:"", client_id: "", firm_id: "", majorhead_id: "", minorhead_id: ""};
        default:
            return state;
    }
}
