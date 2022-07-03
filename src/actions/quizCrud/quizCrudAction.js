import UNIVERSAL from "../../config/config";
// import { SET_ALL_QUIZ } from "../../constants/allQuiz/allQuizConst";
import { set_all_quiz } from "../allQuiz/allQuizAction";

export function add_quiz(new_quiz) {
    console.log(new_quiz)
    return (dispatch) => {
        // dispatch(setLoader());
            return fetch(UNIVERSAL.BASEURL + "api/quiz/add_quiz", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // "Auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify(new_quiz),
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    
                    dispatch(set_all_quiz())
                    alert(responseJson.message)
               
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

export function edit_quiz(quiz_id, new_quiz) {
    console.log(quiz_id)
    return (dispatch) => {
        // dispatch(setLoader());
            return fetch(UNIVERSAL.BASEURL + "api/quiz/update_quiz/"+ quiz_id, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // "Auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                "Auth-token" : (localStorage.getItem('sre_auth_token'))
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify(new_quiz),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.message)
                if (responseJson.status) {

                    dispatch(set_all_quiz())
               
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