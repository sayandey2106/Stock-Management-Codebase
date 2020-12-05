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
    if (localStorage.getItem("taxopliance_token") !== null) {
      this.props.setLogin({
        type: localStorage.getItem("taxopliance_type"),
        _id: localStorage.getItem("taxopliance_user_id"),
        user_token: localStorage.getItem("taxopliance_token"),
        profile_pic: localStorage.getItem("taxopliance_profile_pic"),
        name: localStorage.getItem("taxopliance_name"),
        organization_id: localStorage.getItem("taxopliance_organization_id")
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
