import UNIVERSAL from "../../config/config";
import { CURR_QUIZ, SET_QUESTIONS } from "../../constants/startExam/startExamConst";
import { Redirect } from "react-router-dom";


export function start_exam(quiz_id) {
    console.log("start exam here")
    console.log(quiz_id)
    return (dispatch) => {
        // dispatch(setLoader());
  
            return fetch(UNIVERSAL.BASEURL +"api/quiz/fetch_all_question_with_quizId/" + quiz_id  , {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            // body: JSON.stringify({
            //     // student_id: (localStorage.getItem('sre_user_id')),
            //     // student_id : "628c6d9a2e585ddadc99b936",
            //     // quiz_id: "62acd49c646c0918f3fd0a81",
            //     // // quiz_id: quiz_id
        
            //  }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch({type:SET_QUESTIONS,payload:responseJson.result})
               
                        // dispatch(view_profile(responseJson.authToken));
                        console.log(responseJson);
                    // dispatch(set_snack_bar(true, responseJson.message));
                 

                } else {
                    
                    // dispatch(set_snack_bar(true, responseJson.message));
                }
                // dispatch(unsetLoader())
            })

            .catch((error) => {
                console.error(error);
            });

    };
}


export function setCurrQuiz(payload) {
    return {
        type: CURR_QUIZ,
        payload: payload
    }
}