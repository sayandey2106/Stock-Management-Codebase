import {
 SET_SUMMARY , SET_EXAM_HISTORY
} from "../../constants/dashboard/dashboardConstants";

const initial_state = {

summary:{},
history: []


};
export default function reducer(state = initial_state, action) {
    // console.log(action)
    switch (action.type) {
        case SET_SUMMARY:
            return state = { ...state, summary: action.payload };
        case SET_EXAM_HISTORY:
            return state = { ...state, history: action.payload };

        default:
            return state;
    }
}
