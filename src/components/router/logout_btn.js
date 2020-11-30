import React from "react";
import Icon from "@material-ui/core/Icon";
import {
  // Link,
  Redirect
} from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class LG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  render() {
    
    if(this.state.redirect)
      return <Redirect to="/" />
    
    return (
      // <Link to="/" style={{textDecoration:'none'}}>
        <Button color="inherit" className="logout-btn"
          onClick={() => {
            localStorage.removeItem("skyyrider_type");
            localStorage.removeItem("skyyrider_token");
            localStorage.removeItem("skyyrider_name");
            localStorage.removeItem("skyyrider_profile_pic");
            localStorage.removeItem("skyyrider_user_id");
            this.setState({
              redirect: true
            });
            this.props.onLogout();
          }}>
          {/* <Icon style={{ color: "#3f51b5" }}>power_settings_new</Icon> */}
          Log Out
        </Button>
     
    )
  }
}