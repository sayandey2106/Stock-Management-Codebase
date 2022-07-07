import React, { Component } from "react";
import { connect } from "react-redux";
// import Login from "../components/login";

import AdminSignup from "../../components/signup/signupAdmin";

import {
  createName,
  createCaste,
  createCollege,
  createEmail,
  createGender,
  createPassword,
  createPhone,
  createProfilePic,
  createSkills,
  createType,
  sign_up,
  createEmailAdmin,
  createPasswordAdmin,createPhoneAdmin,
  createProfilePicAdmin,createNameAdmin, sign_up_admin,get_profile_pic_link
 } from "../../actions/signup/signupAction";



export class AdminSignupCont extends Component {
  render() {
    return (
   
      <AdminSignup {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    // login: store.login,
    // loader: store.loader,
    // snackbar: store.snackbar,
    adminSignup : store.adminSignup
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    
sign_up_admin:(signup) =>{
  dispatch(sign_up_admin(signup))
},


  createNameAdmin:(payload) =>{
    dispatch(createNameAdmin(payload))
  },

  createEmailAdmin: (payload) =>{
    dispatch(createEmailAdmin(payload))
  },

  createPasswordAdmin: (payload) =>{
    dispatch(createPasswordAdmin(payload))
  },
  createPhoneAdmin: (payload) =>{
    dispatch(createPhoneAdmin(payload))
  },
  createProfilePicAdmin: (payload) =>{
    dispatch(createProfilePicAdmin(payload))
  },
  get_profile_pic_link:(payload) =>{
    dispatch(get_profile_pic_link(payload))
  },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminSignupCont);