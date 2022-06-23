import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { JumpCircleLoading } from 'react-loadingg';
export default class Loader extends Component {
  render() {
    const { loader } = this.props;
    console.log(loader.openLoader, "hi");
    return (
      // <Dialog
      //   open={loader.open}
      //   aria-labelledby="Loading..."
      // >loading
      //   <DialogTitle id="simple-dialog-title">
      //     {/* <center> */}
      //     <CircularProgress  />
      //     {/* </center> */}
      //   </DialogTitle>
      // </Dialog>
      <div>
        
        {loader.open===true ? <h1>Loading</h1>:<h1></h1>}
      </div>
    );
  }
}