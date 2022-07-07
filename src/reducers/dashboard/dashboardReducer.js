import {
 SET_SUMMARY , SET_EXAM_HISTORY, SET_UPCOMING
} from "../../constants/dashboard/dashboardConstants";

const initial_state = {

summary:{},
history: [],
upcoming:[]


};
export default function reducer(state = initial_state, action) {
    // console.log(action)
    switch (action.type) {
        case SET_SUMMARY:
            return state = { ...state, summary: action.payload };
        case SET_EXAM_HISTORY:
            return state = { ...state, history: action.payload };
            case SET_UPCOMING:
                return state = { ...state, upcoming: action.payload };       
        default:
            return state;
    }
}
