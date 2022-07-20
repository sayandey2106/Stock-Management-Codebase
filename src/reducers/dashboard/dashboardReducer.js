import {
 SET_SUMMARY , SET_EXAM_HISTORY, SET_UPCOMING, STUDENT_MARKS
} from "../../constants/dashboard/dashboardConstants";

const initial_state = {

summary:{},
history: [],
upcoming:[],
student_marks:[]


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
                case STUDENT_MARKS:
                    return state = { ...state, student_marks: action.payload };  
        default:
            return state;
    }
}
