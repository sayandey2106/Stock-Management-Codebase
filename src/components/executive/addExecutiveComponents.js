import React, { Component } from "react/index.js";
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
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Avatar, } from "@material-ui/core";
import moment from "moment";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { styles } from "../../styles/style";
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
class AddExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            profile:"",
            email:"",
            password:"",
            position:"",
            department:"",
            employee_id:""
        }
    }
    componentDidMount() {
        this.props.get_all_executive(this.props.login.token, this.props.login.organization_id)
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

    render() {
        const {
            snackbar,
            close_snack_bar,
            executive,
            login,
            add_executive,
            set_executive_name,
            set_executive_profile,
            set_executive_email,
            set_executive_password,
            set_executive_position,
            set_executive_department,
            set_executive_employee_id
        } = this.props;
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    ADD EXECUTIVE
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                onChange={(event)=>{set_executive_name(event.target.value)}}
                                value={executive.name}
                            />
                            <TextField
                                // autoFocus
                                // margin="dense"
                                // id="name"
                                // label="Profile Pic"
                                type="file"
                                // fullWidth
                                onChange={(event)=>{set_executive_profile(event.target.files[0])}}
                                // value={executive.profile}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                onChange={(event)=>{set_executive_email(event.target.value)}}
                                value={executive.email}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Password"
                                type="password"
                                fullWidth
                                onChange={(event)=>{set_executive_password(event.target.value)}}
                                value={executive.password}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Position"
                                type="text"
                                fullWidth
                                onChange={(event)=>{set_executive_position(event.target.value)}}
                                value={executive.position}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Department"
                                type="text"
                                fullWidth
                                onChange={(event)=>{set_executive_department(event.target.value)}}
                                value={executive.department}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Employee ID"
                                type="text"
                                fullWidth
                                onChange={(event)=>{set_executive_employee_id(event.target.value)}}
                                value={executive.employee_id}
                            />
                            <Button onClick={()=>{add_executive(executive, login.token, login.organization_id)}}>
                                SUBMIT
                            </Button>
                        </CardContent>
                    </Card>
                    <LoaderCon />
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
export default withStyles(styles)(AddExecutive);