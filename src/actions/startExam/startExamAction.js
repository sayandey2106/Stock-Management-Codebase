import UNIVERSAL from "../../config/config";
import { CURR_QUIZ, SET_QUESTIONS, START_EXAM_STATUS } from "../../constants/startExam/startExamConst";
import { Redirect } from "react-router-dom";


export function view_all_questions(quiz_id) {
    console.log("start exam here")
    console.log(quiz_id)
    return (dispatch) => {
        // dispatch(setLoader());
  
            return fetch(UNIVERSAL.BASEURL + "api/question/"+ quiz_id +"/view_all_questions" , {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            // body: JSON.stringify({
            //     // student_id: (localStorage.getItem('sre_auth_token')),
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

export function start_exam(quiz_id) {
    
    console.log("exam start", quiz_id)
    return async (dispatch) => {
        // dispatch(setLoader());
  
            try {
            const response = await fetch(UNIVERSAL.BASEURL + "api/quiz/appear/" + quiz_id + "/start_exam", {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "auth-token": (localStorage.getItem('sre_auth_token')),
                }
                // body: JSON.stringify({
                //     student_id: (localStorage.getItem('sre_auth_to')),
                //     quiz_id: (localStorage.getItem('curr_quiz')),
                //     // quiz_id: quiz_id
                //  }),
            });
            const responseJson = await response.json();
            console.log(responseJson);
            if (responseJson.status) {
                dispatch({type:START_EXAM_STATUS,payload:responseJson.status})
                // dispatch({type:SET_QUESTIONS,payload:responseJson.result})
                // dispatch(view_profile(responseJson.authToken));
                console.log(responseJson);
                console.log("attemted exam");
                alert(responseJson.message);
            } else {
                dispatch({type:START_EXAM_STATUS,payload:responseJson.status})
            }
        } catch (error) {
            console.error(error);
        }

    };
}

export function end_exam(quiz_id) {
    
    console.log("exam end")
    return (dispatch) => {
        // dispatch(setLoader());
  
            return fetch(UNIVERSAL.BASEURL + "api/quiz/appear/"+ quiz_id+"/end_exam" , {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "auth-token" :(localStorage.getItem('sre_auth_token')),
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            // body: JSON.stringify({
            //     student_id: (localStorage.getItem('sre_auth_to')),
               
            //     quiz_id: (localStorage.getItem('curr_quiz')),
            //     // quiz_id: quiz_id
        
            //  }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:START_EXAM_STATUS,payload:responseJson.status})
               
                        // dispatch(view_profile(responseJson.authToken));
                        console.log(responseJson);
                        console.log("attemted exam");
                        alert(responseJson.message)
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

export function attempt_question(quiz_id, question_id, option_selcted) {       



    console.log("attempt option")
    console.log(quiz_id)
    console.log(question_id)
    console.log(option_selcted)
    return (dispatch) => {
        // dispatch(setLoader());

        return fetch(UNIVERSAL.BASEURL + "api/quiz/question/" + quiz_id + "/" + question_id + "/attempted", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "auth-token": (localStorage.getItem('sre_auth_token')),
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify({
                option_selcted: option_selcted
                // quiz_id: quiz_id

            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    // dispatch({type:SET_QUESTIONS,payload:responseJson.result})

                    // dispatch(view_profile(responseJson.authToken));
                    console.log(responseJson);
                    console.log("attemted exam");
                    alert(responseJson.message)
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
