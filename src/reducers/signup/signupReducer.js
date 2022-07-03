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
 const initial_state = {
     
   email: "",
   name: "",
   password:"",
   phone_no:"",
   gender:"",
   college_name:"",
   caste:"",
 
   // profile_pic: "",
   type: "S",
   
  
   // password: "",
   // token: "",
   // confirmpassword: "",
   // newpassword: "",
   // isRegistered: false,
   // response_received: false,
   // isPasswordchange: false,
   // message: "",
   // mobileOpen: false,
   // user_id: "",
   // company_id:"",
   // departments: [],
   // loginModal: false
 };
 export default function reducer(state = initial_state, action) {
   switch (action.type) {
     case CREATE_EMAIL:
       return state = { ...state, email: action.payload };
     case CREATE_PASSWORD:
       return state = { ...state, password: action.payload };
     case CREATE_NAME:
       return state = { ...state, name: action.payload };
     case CREATE_CASTE:
       return state = { ...state, caste: action.payload };
    case CREATE_COLLEGE:
           return state = { ...state, college_name: action.payload };
    case CREATE_PHONE:
               return state = { ...state, phone_no: action.payload };
   case CREATE_GENDER:
               return state = { ...state, gender: action.payload };
   // case CREATE_PROFILE_PIC:
   //             return state = { ...state, profile_img: action.payload };    

   case CREATE_TYPE:
               return state = { ...state, type: action.payload };
   //   case LOGIN:
   //     return state = {
   //       ...state,
   //       isHome: false,
   //       type: action.payload.type,
         // token: action.payload.user_token,
       //   name: action.payload.name,
         // profile_img: action.payload.profile_pic,
       //   user_id: action.payload.authToken,
         // company_id: action.payload.company_id,
         // organization_id: action.payload.organization_id
       // };
   //   case LOGOUT:
   //     return state = {
   //       ...state,
   //       token: "",
   //       type: "",
   //       email: "",
   //       password: "",
   //       user_id: "",
   //       profile_img: "",
   //       organization_id: "",
   //       isHome: true
   //     };
   //   case HANDLEDRAWER:
   //     return state = { ...state, mobileOpen: action.payload };
   //   case HANDLEDRAWER1:
   //     return state = { ...state, data: action.payload };
   //   case SET_HOME:
   //     return state = { ...state, isHome: true };
   //   case OPEN_LOGIN_MODAL:
   //     return { ...state, loginModal: true };
   //   case CLOSE_LOGIN_MODAL:
   //     return { ...state, loginModal: false };
     default:
       return state;
   }
 }