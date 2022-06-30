// import {
//     SET_PROFILE
// } from "../../constants/profile/profileConst";
import {  EDIT_PROFILE } from "../../constants/profile/profileConst";
const initial_state = {
   edit_profile:{
    
   }
};
export default function reducer(state = initial_state, action) {
    //console.log(action)
    switch (action.type) {
        case EDIT_PROFILE:
            return state = { ...state,edit_profile:action.payload  };

        default:
            return state;
    }
}
