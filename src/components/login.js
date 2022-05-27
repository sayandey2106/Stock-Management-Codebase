import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from "../components/snackbar/snackbar";
import "../styles/style.scss";
import LoaderCon from "../containers/loader/loader_cont";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    this.props.clear_login()
    // if (localStorage.getItem('socus_token') !== null) {
    //   return <Redirect to="/" />
    // }
  }
  render() {
    const {
      login,
      setEmail,
      setPwd,
      login_email,
      snackbar,
      close_snack_bar,
    } = this.props;

    if (login.user_id !== "") {
      return <Redirect to="/dashboard" />
    }

    return (
      <div>
     
      </div>
    );
  }
}
export default Login;
