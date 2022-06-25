import React, { Component } from "react";
import { connect } from "react-redux";
// import Login from "../components/login";

import Signup from "../../components/signup/signup";

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
  sign_up
 } from "../../actions/signup/signupAction";



export class SignupCont extends Component {
  render() {
    return (
   
      <Signup {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    // login: store.login,
    // loader: store.loader,
    // snackbar: store.snackbar,
    signup : store.signup
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    
sign_up:(signup) =>{
  dispatch(sign_up(signup))
},

 createCaste:  (payload) =>{
      dispatch(createCaste(payload))
    },
  createCollege:(payload) =>{
    dispatch(createCollege(payload))
  },
  createName:(payload) =>{
    dispatch(createName(payload))
  },
  createType:(payload) =>{
    dispatch(createType(payload))
  },
  createEmail: (payload) =>{
    dispatch(createEmail(payload))
  },
  createGender: (payload) =>{
    dispatch(createGender(payload))
  },
  createPassword: (payload) =>{
    dispatch(createPassword(payload))
  },
  createPhone: (payload) =>{
    dispatch(createPhone(payload))
  },
  createProfilePic: (payload) =>{
    dispatch(createProfilePic(payload))
  },
  createSkills: (payload) =>{
    dispatch(createSkills(payload))
  },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupCont);