import React, {useState} from "react";
import "./card1.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import pay from "./razorpay";
import {Grid, Icon, IconButton} from "@material-ui/core";

function Card1(props) {
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState("");
    const [helper, setHelper] = useState("Atleast ₹2,500/- to be paid");
    const [isAmount, setIsAmount] = useState(true);
    let icon;
    if (props.Button === true) {

        icon = <Button variant={"outlined"} color={"secondary"} onClick={() => setOpen(true)}>PAY</Button>
    }
    return (
        <div className="card-one" id={props.color}>
            {/*{props.isRemaining && }*/}
            {props.isRemaining ? <p id="p-1">{"₹" + props.number.toLocaleString() + "/-"}</p> : <p id="p-1">{props.number}</p>}
            <p id="p-2">{props.cardName}</p>
            {props.isRemaining && props.number <= 500 && <p id="p-3"> {icon}</p>}

            <Dialog open={open}>
                <DialogTitle>
                    <Grid container xs={12} justify={"flex-end"}>
                        <Grid item xs={2}>
                            <IconButton onClick={() => setOpen(false)}>
                                <Icon>
                                    close
                                </Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container xs-={12} justify={"center"}>
                        <Grid item xs={6} alignContent={"center"}>
                            Recharge
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    {/* <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            // onChange={}
            // value={}
          />*/}

                    <TextField
                        /*margin="dense"
                        label="Amount"
                        type="text"
                        fullWidth*/
                        // onChange={}
                        // value={}
                        error
                        id="filled-error-helper-text"
                        label="Amount"
                        // defaultValue="Hello World"
                        helperText={helper}
                        variant="filled"
                        onChange={(event) => {
                            if (event.target.value >= 2500) {
                                setHelper("");
                                setPrice(event.target.value);
                                setIsAmount(false)
                            } else {
                                setHelper("Atleast ₹2,500/- to be paid");
                                setPrice(0);
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    {/*<Button variant="contained" color="secondary" onClick={() => setOpen(false)}>close</Button>*/}
                    <Button variant="contained" disabled={isAmount} color="primary" onClick={() => {
                        setOpen(false);
                        if (price >= 2500) {
                            pay(((price * 105) / 100), props.id);
                        }
                    }}
                    >proceed</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Card1;
