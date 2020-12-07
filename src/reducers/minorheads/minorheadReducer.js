import {
    SET_ALL_MINORHEAD
} from "../../constants/minorheads/minorheadConstants";
const initial_state = {
    all_minorhead:[],
    name:"",
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_MINORHEAD:
            return state = { ...state, all_minorhead: action.payload };
        default:
            return state;
    }
}