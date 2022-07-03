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
      <div>
      
        
        {loader.openLoader===true ?<div class="spinner-border text-warning text-center" role="status" style={{position :"absolute", left:"50%", top:"50%"} }> 
  <span class="sr-only">Loading...</span>
</div>:<h1></h1>}
      </div>
    );
  }
}