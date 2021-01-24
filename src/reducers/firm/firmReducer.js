import {
    RESET_FIRM,
    SET_ALL_FIRM,
    SET_FIRM_DDO,
    SET_FIRM_DIN,
    SET_FIRM_GST,
    SET_FIRM_IEC, SET_FIRM_NAME,
    SET_FIRM_PF_ESI,
    SET_FIRM_PT,
    SET_FIRM_REG,
    SET_FIRM_TYPE,
    SET_FIRM_MINORHEAD_ID,
    SET_FIRM_MAJORHEAD_ID,
    SET_FIRM_CLIENT_ID,
    SET_FIRM_RECURSIVE

} from "../../constants/firm/firmConstants";
const initial_state = {
    all_firm:[],
    name:"",
    type:"",
    reg:"",
    gst:"",
    din:"",
    pt:"",
    pf_esi:"",
    iec: "",
    ddo: "",
    client_id:"",
    mjid:"",
    mnid:"",
    recursive:""
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_FIRM:
            return state = { ...state, all_firm: action.payload };
        case SET_FIRM_NAME:
            return state = { ...state, name: action.payload };
        case SET_FIRM_TYPE:
            return state = { ...state, type: action.payload };
        case SET_FIRM_REG:
            return state = { ...state, reg: action.payload };
        case SET_FIRM_GST:
            return state = { ...state, gst: action.payload };
        case SET_FIRM_PT:
            return state = { ...state, pt: action.payload };
        case SET_FIRM_DIN:
            return state = { ...state, din: action.payload };
        case SET_FIRM_PF_ESI:
            return state = { ...state, pf_esi: action.payload };
        case SET_FIRM_DDO:
            return state = { ...state, ddo: action.payload };
        case SET_FIRM_IEC:
            return state = { ...state, iec: action.payload };
        case SET_FIRM_CLIENT_ID:
            return state = { ...state, client_id: action.payload };
        case SET_FIRM_MAJORHEAD_ID:
            return state = { ...state, mjid: action.payload };
        case SET_FIRM_MINORHEAD_ID:
            return state = { ...state, mnid: action.payload };
        case SET_FIRM_RECURSIVE:
            return state = { ...state, recursive: action.payload };
        case RESET_FIRM:
            return state = { ...state, name:"", type:"", client_id:"", reg: "", gst: "", din: "", ddo: "", pt: "", pf_esi: "", iec: ""};
        default:
            return state;
    }
}
