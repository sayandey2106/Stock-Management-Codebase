import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
export default class LoaderEm extends Component {
  render() {
    const { loader } = this.props;
    return (
      <div>
        {loader.open ? <CircularProgress /> : ""}
      </div>
    );
  }
}