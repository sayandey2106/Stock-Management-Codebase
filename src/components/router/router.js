import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Login from "../../containers/loginCon";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) * 3,
  },
  content2: {
    flexGrow: 1,
  },

});

class Routes extends Component {

  render() {
    const { login, classes, onLogout } = this.props;
    let body;

    body =
      login.isHome ?
        <div className={classes.root}>
          <main className={classes.content2}>
            <Route exact path="/" component={Login} />
          </main>
        </div>
        :
        <div className={classes.root}>
          <main className={classes.content}
            style={{ marginTop: 50 }}
          >
            <Route exact path="/" component={Login} />
          </main>
        </div>
      ;

    return (
      <Router>
        {body}
      </Router>
    );
  }
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Routes);
