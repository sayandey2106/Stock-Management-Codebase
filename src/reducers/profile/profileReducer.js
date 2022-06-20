// import {
//     SET_PROFILE
// } from "../../constants/profile/profileConst";
import { SET_PROFILE } from "../../constants/profile/profileConst";
const initial_state = {
   user_profile:{
    
   }
};
export default function reducer(state = initial_state, action) {
    //console.log(action)
    switch (action.type) {
        case SET_PROFILE:
            return state = { ...state,user_profile:action.payload  };
        // case SET_CATEGORY_LIST:
        //     return state = { ...state, category_list: action.payload };
        default:
            return state;
    }
}
