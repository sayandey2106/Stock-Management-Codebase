import UNIVERSAL from "../../config/config";
import { SET_ALL_QUIZ } from "../../constants/allQuiz/allQuizConst";


export function set_all_quiz() {
    console.log("get all quiz")
    return (dispatch) => {
        // dispatch(setLoader());
            return fetch(UNIVERSAL.BASEURL + "api/quiz/view_all_quiz", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // "Auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                "Auth-token" : (localStorage.getItem('sre_user_id'))
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            // body: JSON.stringify({
            //     // student_id: (localStorage.getItem('sre_user_id')),
           
            //     // quiz_id: quiz_id
        
            //  }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {

                    dispatch({type:SET_ALL_QUIZ,payload:responseJson.result})
               
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