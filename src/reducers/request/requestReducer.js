import {
    SET_ALL_REQUEST
} from "../../constants/request/requestConstants";
const initial_state = {
    all_request:[],
    name:"",
    quantity:""
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_REQUEST:
            return state = { ...state, all_request: action.payload };
        default:
            return state;
    }
}
