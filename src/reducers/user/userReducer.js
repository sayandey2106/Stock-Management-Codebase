import {
    SET_ALL_USER
} from "../../constants/user/userConstants";
const initial_state = {
    all_user:[],
    name:"",
    quantity:""
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {
        case SET_ALL_USER:
            return state = { ...state, all_user: action.payload };
        default:
            return state;
    }
}
