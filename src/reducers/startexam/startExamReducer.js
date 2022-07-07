import  {SET_QUESTIONS, CURR_QUIZ}  from "../../constants/startExam/startExamConst";

const initial_state = {
    question_set:[],
    current_quiz:"",

  
 };
 export default function reducer(state = initial_state, action) {
     //console.log(action)
     switch (action.type) {
         case SET_QUESTIONS:
             return state = {...state, question_set:action.payload  };
  
         case CURR_QUIZ:
             return state = { ...state, current_quiz: action.payload };
         default:
             return state;
     }
 }