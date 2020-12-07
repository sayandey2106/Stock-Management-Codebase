import {
    SET_MAJORHEAD_NAME,
    SET_ALL_MAJORHEAD
} from "../../constants/majorhead/majorheadConst";
const initial_state = {
    all_majorhead:[],
    name:"",
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_MAJORHEAD:
            return state = { ...state, all_majorhead: action.payload };
        default:
            return state;
    }
}