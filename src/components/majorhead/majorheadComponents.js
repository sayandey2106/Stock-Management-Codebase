import React, {Component} from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Avatar,} from "@material-ui/core";
import moment from "moment";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import {styles} from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
// import {add_majorhead} from "../../actions/majorhead/majorheadActions";

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50
};
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

class MajorheadComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            add:false,
            id: "",
            name: "",
        }
    }

    componentDidMount() {
        this.props.get_all_majorhead(this.props.login.token)
    }

    // ed = (s) => {
    //     this.setState({
    //         amenity_desc: s.amenity_desc,
    //         amenity_name: s.amenity_name,
    //         amenity_fullday_price: s.amenity_price_info.Hourly_price,
    //         guest_fullday_price: s.guest_price_info.Hourly_price,
    //         start_time: moment(s.available_timings[0], ["h:mm A"]).format("YYYY-MM-DD HH:mm:ss"),
    //         end_time: moment(s.available_timings[1], ["h:mm A"]).format("YYYY-MM-DD HH:mm:ss"),
    //         amenity_id: s._id,
    //         isfree: s.is_free,
    //         no_of_slots: s.no_of_slots,
    //         imgs: s.amenity_imgs
    //     })
    // }
    // del_single_row = (row) => {
    //     this.setState({
    //         confirm_delete: true,
    //         id: row._id,
    //     })
    // }
    handleClose = () => {
        this.setState({delete: false, update:false, add:false, id:"", name:""})
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            majorhead,
            delete_majorhead,
            update_majorhead,
            login,
            add_majorhead
        } = this.props;
        console.log(majorhead.all_majorhead)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW MAJORHEAD
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                {/*<Link to="add_majorhead" style={{textDecoration: "none"}}>*/}
                                <IconButton onClick={()=>{this.setState({add:true})}}>
                                    <Icon>add</Icon>
                                </IconButton>
                                {/*</Link>*/}

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {majorhead.all_majorhead.map(row =>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            <TableCell align={"right"}>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        update: true,
                                                        id:row._id,
                                                        name: row.name
                                                    })
                                                }}>
                                                    <Icon>edit</Icon>
                                                </IconButton>
                                                <IconButton onClick={() => {
                                                    this.setState({delete: true, id: row._id})
                                                }}>
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                                <Dialog open={this.state.delete}
                                        onClose={this.handleClose}
                                        aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Delete Majorhead</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Are you sure?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            onClick={() => {
                                                this.handleClose()
                                            }}
                                            color="primary"
                                        >
                                            No
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                delete_majorhead(this.state.id, login.token)
                                            }}
                                            color="primary"
                                        >
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Dialog open={this.state.update} onClose={() => {
                                    this.handleClose()
                                }} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Enter new Name.
                                        </DialogContentText>

                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Name"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({name: event.target.value})
                                            }}
                                            value={this.state.name}
                                        />

                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.handleClose()} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                update_majorhead(this.state.id, this.state.name, login.token)
                                            }}
                                            color="primary"
                                        >
                                            Update
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Dialog open={this.state.add}
                                        onClose={this.handleClose}
                                        aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Add Majorhead</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            <TextField
                                                // autoFocus
                                                margin="dense"
                                                // id="name"
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                onChange={(event) => {
                                                    this.setState({name: event.target.value})
                                                }}
                                                value={this.state.name}
                                            />
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            onClick={() => {
                                                this.handleClose()
                                            }}
                                            color="primary"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                add_majorhead(this.state.name, login.token)
                                            }}
                                            color="primary"
                                        >
                                            ADD
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Table>
                        </CardContent>
                    </Card>
                    <LoaderCon/>
                    <Snackbar
                        open={snackbar.response_received}
                        close_snack_bar={close_snack_bar}
                        message={snackbar.message}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(MajorheadComponents);