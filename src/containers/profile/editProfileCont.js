import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../../components/profile/profile";
// import EditProfile from "../components/profile/editProfile";
import EditProfile from "../../components/profile/editProfile";
import {
  view_profile
} from "../../actions/profile/profileAction"
export class EditProfileCont extends Component {
  render() {
    return (
      <EditProfile {...this.props} />
      
    );
  }
};
export const mapStateToProps = store => {
  return {
    profile: store.profile,
    login: store.login
    // snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    view_profile: (user_id) => {
      dispatch(view_profile(user_id))
    },
    // edit_profile :(profile)=>{
    //   dispatch(edit_profile(profile))
    // }
    // close_snack_bar: () => {
    //   dispatch(close_snack_bar());
    // },
    // setEmail: (payload) => {
    //   dispatch(setEmail(payload));
    // },
    // setPwd: (payload) => {
    //   dispatch(setPwd(payload));
    // },
    // login_email: (login) => {
    //   dispatch(login_email(login));
    // },
    // setLogin: (type, email, user_token, profile_img) => {
    //   dispatch(setLogin(type, email, user_token, profile_img));
    // },
    // set_home: () => {
    //   dispatch(set_home())
    // },
    // googleLogin: () => {
    //   dispatch(googleLogin())
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileCont);