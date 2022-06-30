import {
   ADMIN_CREATE_EMAIL,
   ADMIN_CREATE_NAME,
   ADMIN_CREATE_PASSWORD,
   ADMIN_CREATE_PHONE,
   ADMIN_CREATE_PROFILE_PIC
  } from "../../constants/signup/signupConstants";
  const initial_state = {
      
    email: "",
    name: "",
    password:"",
    phone_no:"",



  
    // profile_pic: "",
    type: "A",
    
   
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
      case ADMIN_CREATE_EMAIL:
        return state = { ...state, email: action.payload };
      case ADMIN_CREATE_PASSWORD:
        return state = { ...state, password: action.payload };
      case ADMIN_CREATE_NAME:
        return state = { ...state, name: action.payload };

     case ADMIN_CREATE_PHONE:
                return state = { ...state, phone_no: action.payload };
    // case ADMIN_CREATE_PROFILE_PIC:
    //             return state = { ...state, profole: action.payload };
    
    
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
  