import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import DrawerOptions from "../../components/router/drawer";

import { handleDrawerToggle} from "../../actions/loginActions";
import Drawer from "../../components/router/drawer";
export class Drawer_option_con extends Component {

  render() {
    return (
      <Drawer {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
   
   login: store.login,
   profile: store.profile
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    
    handleDrawerToggle: (mobileOpen) => {
      dispatch(handleDrawerToggle(mobileOpen));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer_option_con);