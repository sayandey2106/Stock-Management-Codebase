import {
    SET_ALL_ADMIN
} from "../../constants/admin/adminConst";
const initial_state = {
    all_admin:[],
};
export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case SET_ALL_ADMIN:
            return state = { ...state, all_admin: action.payload };

        default:
            return state;
    }
}