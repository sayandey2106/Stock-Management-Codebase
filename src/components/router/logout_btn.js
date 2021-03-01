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
      <IconButton
        onClick={() => {
          localStorage.removeItem("qubi7_type");
          localStorage.removeItem("qubi7_name");
          localStorage.removeItem("qubi7_profile_pic");
          localStorage.removeItem("qubi7_user_id");
          localStorage.removeItem("qubi7_company_id");
          // localStorage.removeItem("taxopliance_organization_id");
          this.setState({redirect:true})
          this.props.onLogout()
        }}>
        <Icon style={{ color: "white" }}>power_settings_new</Icon>
      </IconButton>
    )
  }
}
