import  {SET_QUESTIONS}  from "../../constants/startExam/startExamConst";

const initial_state = {
    question_set:[]
 };
 export default function reducer(state = initial_state, action) {
     //console.log(action)
     switch (action.type) {
         case SET_QUESTIONS:
             return state = { ...state,question_set:action.payload  };
         // case SET_CATEGORY_LIST:
         //     return state = { ...state, category_list: action.payload };
         default:
             return state;
     }
 }