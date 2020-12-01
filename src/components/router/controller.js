import React, { Component } from "react";
import firebase from "firebase";
import { firebase_config } from "../../constants/ActionTypes";

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      page: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("user_token") !== null) {
      this.props.setLogin(localStorage.getItem("type"), localStorage.getItem("email"), localStorage.getItem("user_token"), localStorage.getItem("profile_img"), localStorage.getItem("name"));
      if (!firebase.apps.length) {
        firebase.initializeApp(firebase_config);
      }
    }
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
