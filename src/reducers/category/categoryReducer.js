import {
    SET_ALL_CATEGORY
} from "../../constants/category/categoryConstants";
const initial_state = {
    all_category:[],
    name:"",
    quantity:""
};
export default function reducer(state = initial_state, action) {
    //console.log(action)
    switch (action.type) {
        case SET_ALL_CATEGORY:
            return state = { ...state, all_category: action.payload };
        default:
            return state;
    }
}
