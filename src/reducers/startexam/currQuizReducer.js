import  {SET_QUESTIONS, CURR_QUIZ , CURR_QUIZ_DETAILS}  from "../../constants/startExam/startExamConst";

const initial_state = {

    current_quiz:"",
    current_quiz_details:{

    }
  
 };
 export default function reducer(state = initial_state, action) {
     //console.log(action)
     switch (action.type) {

  
         case CURR_QUIZ:
             return state = { ...state, current_quiz: action.payload };
             
         case CURR_QUIZ_DETAILS:
            return state = { ...state, current_quiz_details: action.payload };
         default:
             return state;
     }
 }