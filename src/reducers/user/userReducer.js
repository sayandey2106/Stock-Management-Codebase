import {
    SET_ALL_USER,
    SET_ALL_LEAD
} from "../../constants/user/userConstants";
const initial_state = {
    all_user: [],
    name: "",
    quantity: "",
    all_lead: []
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_USER:
            return state = { ...state, all_user: action.payload };
        case SET_ALL_LEAD:
            return state = { ...state, all_lead: action.payload };
        default:
            return state;
    }
}
