import { SET_ALL_QUIZ } from "../../constants/allQuiz/allQuizConst";

const initial_state = {
    quiz_set:[]
 };
 export default function reducer(state = initial_state, action) {
     //console.log(action)
     switch (action.type) {
         case SET_ALL_QUIZ:
             return state = { ...state,quiz_set:action.payload  };
         // case SET_CATEGORY_LIST:
         //     return state = { ...state, category_list: action.payload };
         default:
             return state;
     }
 }