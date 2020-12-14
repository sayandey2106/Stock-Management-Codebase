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
import {Avatar, Badge, colors,} from "@material-ui/core";
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

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: "blue",
        color: "blue",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1px solid currentColor",
            content: '""'
        }
    }
}))(Badge);

const StyledBadge1 = withStyles(theme => ({
    badge: {
        backgroundColor: "blue",
        // color: "blue",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1px solid currentColor",
            content: '""'
        }
    }
}))(Badge);

class ClientComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            id: "",
            name: "",
            profile: "",
            email: "",
            contact_num: "",
            address: "",
            pan_num: "",
            aadhar_num: "",
            client_source: "",
            old_profile: ""
        }
    }

    componentDidMount() {
        this.props.get_all_client(this.props.login.token, this.props.login.organization_id)
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
        this.setState({delete: false})
        this.setState({update: false})
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            client,
            delete_client,
            update_client,
            login
        } = this.props;
        console.log(client.all_client)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW client
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                <Link to="add_client" style={{textDecoration: "none"}}>
                                    <IconButton>
                                        <Icon>add</Icon>
                                    </IconButton>
                                </Link>

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                                        <TableCell align="left">E-Mail</TableCell>
                                        <TableCell align="left">Contact Number</TableCell>
                                        <TableCell align="left">Address</TableCell>
                                        <TableCell align="left">PAN</TableCell>
                                        <TableCell align="left">AADHAR Number</TableCell>
                                        <TableCell align="left">Client Source</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {client.all_client.map(row =>
                                        <TableRow>
                                            <TableCell>
                                                <StyledBadge
                                                    overlap="circle"
                                                    anchorOrigin={{
                                                        vertical: "bottom",
                                                        horizontal: "right"
                                                    }}
                                                    // style = {{color:"blue"}}
                                                    variant="dot"
                                                >
                                                    <Avatar src={row.profile_pic}/>
                                                </StyledBadge>
                                            </TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.contact_num}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">{row.pan_number}</TableCell>
                                            <TableCell align="left">{row.aadhar_number}</TableCell>
                                            <TableCell align="left">{row.source}</TableCell>
                                            <TableCell align={"right"}>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        update: true,
                                                        id: row._id,
                                                        name: row.name,
                                                        email: row.email,
                                                        contact_num: row.contact_num,
                                                        address: row.address,
                                                        pan_num: row.pan_number,
                                                        aadhar_num: row.aadhar_number,
                                                        client_source: row.source,
                                                        old_profile: row.profile_pic
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
                                    <DialogTitle id="form-dialog-title">Delete client</DialogTitle>
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
                                                delete_client(this.state.id, login.token, login.organization_id)
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
                                            Enter the required fields, those needs to be updated.
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
                                        <TextField
                                            // autoFocus
                                            // margin="dense"
                                            // id="name"
                                            // label="Profile Pic"
                                            type="file"
                                            // fullWidth
                                            onChange={(event) => {
                                                this.setState({profile: event.target.files[0]})
                                            }}
                                            // value={this.state.profile}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Email Address"
                                            type="email"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({email: event.target.value})
                                            }}
                                            value={this.state.email}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Contact Number"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({contact_num: event.target.value})
                                            }}
                                            value={this.state.contact_num}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Address"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({address: event.target.value})
                                            }}
                                            value={this.state.address}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="PAN"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({pan_num: event.target.value})
                                            }}
                                            value={this.state.pan_num}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="AADHAR Number"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({aadhar_num: event.target.value})
                                            }}
                                            value={this.state.aadhar_num}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Source"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({client_source: event.target.value})
                                            }}
                                            value={this.state.client_source}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.handleClose()} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                update_client(this.state.id, this.state.name, this.state.email, this.state.profile, this.state.old_profile, this.state.contact_num, this.state.address, this.state.pan_num, this.state.aadhar_num, this.state.client_source, login.token, login.organization_id)
                                            }}
                                            color="primary"
                                        >
                                            Update
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

export default withStyles(styles)(ClientComponents);
