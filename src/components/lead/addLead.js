import React, { Component } from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { styles } from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { InputLabel, MenuItem } from "@material-ui/core";
// import { add_lead } from "../../actions/user/userActions.js";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50,
};
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
};

class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            A: "",
            B: "",
            C: "",
            day:new Date(),
            date: [
                { date: '9.00 AM' },
                { date: '9.15 AM' },
                { date: '9.30 AM' },
                { date: '9.45 AM' },
                { date: '10.00 AM' },
                { date: '10.15 AM' },
                { date: '10.30 AM' },
                { date: '10.45 AM' },
                { date: '11.00 AM' },
                { date: '11.15 AM' },
                { date: '11.30 AM' },
                { date: '11.45 AM' },
                { date: '12.00 PM', },
                { date: '12.15 PM', },
                { date: '12.30 PM', },
                { date: '12.45 PM', },
                { date: '1.00 PM', },
                { date: '1.15 PM', },
                { date: '1.30 PM', },
                { date: '1.45 PM', },
                { date: '2.00 PM', },
                { date: '2.15 PM', },
                { date: '2.30 PM', },
                { date: '2.45 PM', },
                { date: '3.00 PM', },
                { date: '3.15 PM', },
                { date: '3.30 PM', },
                { date: '3.45 PM', },
                { date: '4.00 PM', },
                { date: '4.15 PM', },
                { date: '4.30 PM', },
                { date: '4.45 PM', },
                { date: '5.00 PM', },
                { date: '5.15 PM', },
                { date: '5.30 PM', },
                { date: '5.45 PM', },
                { date: '6.00 PM', },
                { date: '6.15 PM', },
                { date: '6.30 PM', },
                { date: '6.45 PM', },
                { date: '7.00 PM', },
                { date: '7.15 PM', },
                { date: '7.30 PM', },
                { date: '7.45 PM', },
                { date: '8.00 PM', },
            ]
        };
    }

    componentDidMount() {
        // this.props.get_all_executive(this.props.login.token, this.props.login.organization_id)
        // this.props.get_all_majorhead(this.props.login.token)
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
    /*getCurrentDate = (separator='') => {

          let newDate = new Date()
          let date = newDate.getDate();
          let month = newDate.getMonth() + 1;
          let year = newDate.getFullYear();

          return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
      }*/

    render() {
        const {
            snackbar,
            close_snack_bar,
            executive,
            login,
            add_lead
        } = this.props;
        return (
            <Grid container justify="center">

                <Grid item xs={12}>
                    <br />
                    <br />
                    {/* <br/> */}
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="success">
                                <h3>ADD Lottery</h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid container justifyContent="center">
                                <Grid item xs={11} lg={4}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            inputFormat="dd MMM,yyyy"
                                            value={this.state.day}
                                            onChange={(date)=>{this.setState({day:date})}}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                    <TextField
                                        // autoFocus
                                        select
                                        margin="dense"
                                        // id="name"
                                        label="Time"
                                        type="text"
                                        fullWidth
                                        required="true"
                                        onChange={(event) => {
                                            this.setState({
                                                time: event.target.value
                                            })
                                        }}
                                        value={this.state.time}
                                    >
                                        {this.state.date.map((option) => (
                                            <MenuItem key={option.date} value={option.date}>
                                                {option.date}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="A"
                                        type="text"
                                        fullWidth
                                        required="true"
                                        onChange={(event) => {
                                            this.setState({
                                                A: event.target.value
                                            })
                                        }}
                                        value={this.state.A}
                                    />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="B"
                                        type="text"
                                        required="true"
                                        fullWidth
                                        onChange={(event) => {
                                            this.setState({
                                                B: event.target.value
                                            })
                                        }}
                                        value={this.state.B}
                                    />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="C"
                                        required="true"
                                        type="text"
                                        fullWidth
                                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        onChange={(event) => {
                                            this.setState({
                                                C: event.target.value
                                            })
                                        }}
                                        value={this.state.C}
                                    />
                                    <Grid container spacing={2} justify={"flex-end"}>
                                        <Grid item>
                                            <Button
                                                variant={"outlined"}
                                                style={{ color: "#7ac44f" }}
                                                onClick={() => {
                                                    add_lead(
                                                        this.state.day,
                                                        this.state.time,
                                                        this.state.A,
                                                        this.state.B,
                                                        this.state.C
                                                    );
                                                    this.setState({
                                                        day: '',
                                                        time: '',
                                                        A: '',
                                                        B: '',
                                                        C: ''
                                                    });
                                                }}
                                            >
                                                SUBMIT
                                            </Button>
                                        </Grid>

                                    </Grid>

                                </Grid>

                            </Grid>
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
        );
    }
}

export default withStyles(styles)(AddAdmin);