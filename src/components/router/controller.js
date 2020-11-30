import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import firebase from "firebase";
// import { firebase_config } from "../../constants/ActionTypes";

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // redirect: false,
      // page: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("skyyrider_token") !== null) {
      var payload={
        type: localStorage.getItem("skyyrider_type"),
        user_token: localStorage.getItem("skyyrider_token"),
        name: localStorage.getItem("skyyrider_name"),
        profile_pic: localStorage.getItem("skyyrider_profile_pic"),
        _id: localStorage.getItem("skyyrider_user_id"),
      }
      this.props.setLogin(payload) ;
      // if (!firebase.apps.length) {
      //   firebase.initializeApp(firebase_config);
      // }
    }
  }

  render() {
    return <Redirect to="/" />;
  }
}
