import {
    SET_ALL_CATEGORY, SET_CATEGORY_LIST
} from "../../constants/category/categoryConstants";
const initial_state = {
    all_category:[],
    category_list: {},
    name:"",
    quantity:""
};
export default function reducer(state = initial_state, action) {
    //console.log(action)
    switch (action.type) {
        case SET_ALL_CATEGORY:
            return state = { ...state, all_category: action.payload };
        case SET_CATEGORY_LIST:
            return state = { ...state, category_list: action.payload };
        default:
            return state;
    }
}
