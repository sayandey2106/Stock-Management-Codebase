import {
    SIGNUP,
    CREATE_CASTE,
    CREATE_COLLEGE,
    CREATE_EMAIL,
    CREATE_GENDER,
    CREATE_NAME,
    CREATE_PASSWORD,
    CREATE_PHONE,
    CREATE_PROFILE_PIC,
    CREATE_SKILLS,
    CREATE_TYPE
   } from "../../constants/signup/signupConstants";
  

import UNIVERSAL from "../../config/config";
import { Redirect } from "react-router-dom";

   export function createEmail(payload) {
    return {
        type:  CREATE_EMAIL,
        payload: payload
    };
}
export function createName(payload) {
    return {
        type:  CREATE_NAME,
        payload: payload
    };
}
export function createPassword(payload) {
    return {
        type: CREATE_PASSWORD,
        payload: payload
    };
}

export function createCaste(payload) {
    return {
        type: CREATE_CASTE,
        payload: payload
    };
}
export function createSkills(payload) {
    return {
        type: CREATE_SKILLS,
        payload: payload
    };
}
export function createPhone(payload) {
    return {
        type: CREATE_PHONE,
        payload: payload
    };
}
export function createProfilePic(payload) {
    return {
        type: CREATE_PROFILE_PIC,
        payload: payload
    };
}
export function createCollege(payload) {
    return {
        type: CREATE_COLLEGE,
        payload: payload
    };
}
export function createGender(payload) {
    return {
        type: CREATE_GENDER,
        payload: payload
    };
}
export function createType(payload) {
    return {
        type: CREATE_TYPE,
        payload: payload
    };
}

export function sign_up(signup) {

    // const signUpObj = {signup }
    console.warn(signup);
    return (dispatch) => {
        // dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "api/Sauth/signup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                // user_token: token,
                // organization_id: oid
                // company_id:id
            },
            body: JSON.stringify(signup),
           
                // email :signup.email,
                // password : signup.password,
                // type: signup.type,
                // college_name:signup.college,
                //  name:signup.name,
                //   gender:signup.gender,
                //  caste:signup.caste

                // email:"sa@gmail.com",
                // password: "abcd123",
                // phone_no:"9876543210",
                // type:"S",
                // college_name:"abcd",
                // name:"sayan",
                // gender:"m",
                // caste:"a"
                // signup: signup

        
             
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.error)
                if (responseJson.status) {

                    console.log("successfully signed up");
                    alert("Sign Up Successful")
                    // dispatch(setLogin(responseJson))
               
                    //     dispatch(view_profile(responseJson.authToken));
                    // dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    
                    // dispatch(set_snack_bar(true, responseJson.message));
                    console.log(responseJson.error,"error is");
                }
                // dispatch(unsetLoader())
            })

            .catch((responseJson) => {
                console.log(responseJson.error);
            });

              
    };
}


