import React, { useState } from "react";
import "./card1.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

function Card1(props) {
  const [open, setOpen] = useState(false);
  var icon;
  if (props.Button === true) {
    
    icon = <button onClick={() => setOpen(true)}>PAY</button>
  }
  return (
    <div className="card-one" id={props.color}>
      <p id="p-1">{props.number}</p>
      <p id="p-2">{props.cardName}</p>
      <p id="p-3"> {icon}</p>

      <Dialog open={open}>
        <DialogTitle> payment</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            // onChange={}
            // value={}
          />

          <TextField
            margin="dense"
            label="Amount"
            type="text"
            fullWidth
            // onChange={}
            // value={}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={() => setOpen(false)}>close</Button>
          <Button variant="contained" color="primary" onClick={() => setOpen(false)} >proceed</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Card1;
