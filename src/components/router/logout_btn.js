import React from "react";
import Icon from "@material-ui/core/Icon";
import {
  Link,
  Redirect
} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import {NavLink} from "react-router-dom";

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
      // <IconButton
      //   onClick={() => {
      //     localStorage.removeItem("qubi7_type");
      //     localStorage.removeItem("qubi7_name");
      //     localStorage.removeItem("qubi7_profile_pic");
      //     localStorage.removeItem("qubi7_user_id");
      //     localStorage.removeItem("qubi7_company_id");
      //     // localStorage.removeItem("taxopliance_organization_id");
      //     this.setState({redirect:true})
      //     this.props.onLogout()
      //   }}>
      //   <Icon style={{ color: "white" }}>power_settings_new</Icon>
      // </IconButton>
<Link to="/">
      <button

onClick={() => {
  localStorage.removeItem("sre_type");
        localStorage.removeItem("sre_name");
        // localStorage.removeItem("qubi7_profile_pic");
        localStorage.removeItem("sre_user_id");
        // localStorage.removeItem("qubi7_company_id");
        // localStorage.removeItem("taxopliance_organization_id");
        this.setState({redirect:true})
        this.props.onLogout()
        
      }}
      
      style={{position:"relative",
      height:"50px",
      width:"80px",
      border:"1px solid",
           borderRadius:"5px",
           // background:"#fadde1",
           fontSize:"15px",
          // left:"-100px"
          marginLeft:"15px"
          
          }}
          
          > Log Out</button>

          </Link>
      
    )
  }
}
