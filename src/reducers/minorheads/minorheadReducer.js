import {
    SET_ALL_MINORHEAD,
    SET_FIRM_MINORHEAD
} from "../../constants/minorheads/minorheadConstants";
const initial_state = {
    all_minorhead:[],
    name:"",
    majorhead_minorhead:[]
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_MINORHEAD:
            return state = { ...state, all_minorhead: action.payload };
        case SET_FIRM_MINORHEAD:
            return state = { ...state, majorhead_minorhead: action.payload };
        default:
            return state;
    }
}
