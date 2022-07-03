import React, { Component } from "react";
import firebase from "firebase";
// import { firebase_config } from "../../constants/ActionTypes";

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      page: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sre_user_id") !== null) {
      this.props.setLogin({
        type: localStorage.getItem("sre_type"),
        id: localStorage.getItem("sre_user_id"),
        authToken : localStorage.getItem("sre_auth_token"),
        // user_token: localStorage.getItem("taxopliance_token"),
        // profile_pic: localStorage.getItem("qubi7_profile_pic"),
        name: localStorage.getItem("sre_name"),
        // company_id:localStorage.getItem("qubi7_company_id")
        // organization_id: localStorage.getItem("taxopliance_organization_id")
      });
      // if (!firebase.apps.length) {
      //   firebase.initializeApp(firebase_config);
      // }
    }
  }

  render() {
    return (
      <div />


    );
  }
}
