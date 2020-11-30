import React, { Component } from "react";
// import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { JumpCircleLoading } from 'react-loadingg';
export default class Loader extends Component {
  render() {
    const { loader } = this.props;
    return (
      <Dialog
        open={loader.open}
        aria-labelledby="Loading..."
      >
        <DialogTitle id="simple-dialog-title" style={{backgroundColor:'rgba(0,0,0,0.9)'}}>
          {/* <center> */}
          <JumpCircleLoading  />
          {/* </center> */}
        </DialogTitle>
      </Dialog>
    );
  }
}