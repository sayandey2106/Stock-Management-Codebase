import UNIVERSAL from "../../config/config";
// import { SET_ALL_QUIZ } from "../../constants/allQuiz/allQuizConst";
import { set_all_quiz } from "../allQuiz/allQuizAction";

export function add_question(quiz_id,newQuestion) {
    console.log(newQuestion)
    return (dispatch) => {
        // dispatch(setLoader());
            return fetch(UNIVERSAL.BASEURL + "api/question/"+quiz_id+"/add_question", {
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
            body: JSON.stringify(newQuestion),
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
export function edit_question(quiz_id,newQuestion) {
    console.log(newQuestion)
    return (dispatch) => {
        // dispatch(setLoader());
            return fetch(UNIVERSAL.BASEURL + "api/question/update_question/" +quiz_id, {
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
            body: JSON.stringify(newQuestion),
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
