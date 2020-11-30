import {
    SET_PAYMENT_DETAIL
} from "../../constants/payment/paymentConst";
const initialState = {
    payment: {}
}
export default (state = initialState, action) => {
    switch(action.type){
        case SET_PAYMENT_DETAIL:
            return {
                ...state,
                payment: action.payload
            }
        default:
            return state
    }
}