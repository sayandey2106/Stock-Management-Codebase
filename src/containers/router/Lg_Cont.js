import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import LG from "../../components/router/logout_btn";



import {
  onLogout
} from "../../actions/loginActions";


export class LG_Cont extends Component {

  render() {
    return (
      <LG {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
    login: store.login
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onLogout: (user_token, uuid) => {
      dispatch(onLogout(user_token, uuid));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LG_Cont);