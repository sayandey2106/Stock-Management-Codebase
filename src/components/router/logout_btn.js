import React from "react";
import Icon from "@material-ui/core/Icon";
import {
  // Link,
  Redirect
} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

export default class LG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  render() {
    const { login} = this.props; 

    if (this.state.redirect === true) {
      return <Redirect to="/" />
    }
    return (
      <IconButton color="inherit"
        onClick={() => {
          localStorage.removeItem("taxopliance_type");
          localStorage.removeItem("taxopliance_user_id");
          localStorage.removeItem("taxopliance_token");
          localStorage.removeItem("taxopliance_profile_pic");
          localStorage.removeItem("taxopliance_name");
          localStorage.removeItem("taxopliance_organization_id");
          this.setState({redirect:true})
          this.props.onLogout()
        }}>
        <Icon style={{ color: "#3f51b5" }}>power_settings_new</Icon>
      </IconButton>
    )
  }
}