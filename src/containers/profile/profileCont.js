import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../../components/profile/profile";
import {
  view_profile, edit_name, edit_college_name, edit_caste, edit_dob, edit_gender, edit_skills, edit_branch, edit_mobile, edit_photo, get_edit_profile_pic_link 
} from "../../actions/profile/profileAction"
export class ProfileCont extends Component {
  render() {
    return (
      <Profile {...this.props} />
      
    );
  }
};
export const mapStateToProps = store => {
  return {
    profile: store.profile,
    login: store.login,
    loader: store.loader,
    // snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    view_profile: (user_id) => {
      dispatch(view_profile(user_id))
    },
    edit_name: (value) => {
      dispatch(edit_name( value))
    },
    edit_caste: (value) => {
      dispatch(edit_caste( value))
    },
    edit_gender: (value) => {
      dispatch(edit_gender( value))
    },
    edit_skills: (value) => {
      dispatch(edit_skills( value))
    },
    edit_college_name: (value) => {
      dispatch(edit_college_name( value))
    },
    edit_dob: (value) => {
      dispatch(edit_dob( value))
    },
    edit_branch: (value) => {
      dispatch(edit_branch( value))
    },
    edit_mobile: (value) => {
      dispatch(edit_mobile( value))
    },
    edit_photo: (value) => {
      dispatch(edit_photo( value))
    },
 get_edit_profile_pic_link :(file , name) =>{
   dispatch( get_edit_profile_pic_link (file,name))
 }

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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCont);