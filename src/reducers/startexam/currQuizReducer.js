import  {SET_QUESTIONS, CURR_QUIZ , CURR_QUIZ_DETAILS, CURR_QUESTION, CURR_QUESTION_DETAILS, START_EXAM_STATUS}  from "../../constants/startExam/startExamConst";

const initial_state = {

    current_quiz:"",
    current_quiz_details:{

    },
  current_question:"",
  current_question_details:{},
  start_exam_status:"",
 };
 export default function reducer(state = initial_state, action) {
     //console.log(action)
     switch (action.type) {

  
         case CURR_QUIZ:
             return state = { ...state, current_quiz: action.payload };
             
         case CURR_QUIZ_DETAILS:
            return state = { ...state, current_quiz_details: action.payload };
            case CURR_QUESTION:
                return state = { ...state, current_question: action.payload };
             case CURR_QUESTION_DETAILS:
                return state = { ...state, current_question_details: action.payload };
            case START_EXAM_STATUS:
                 return state = { ...state, start_exam_status: action.payload };
         default:
             return state;
     }
 }