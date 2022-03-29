import React, {Component} from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {styles} from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import {Link} from "react-router-dom";
import {InputLabel} from "@material-ui/core";
// import { add_lead } from "../../actions/user/userActions.js";

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
            name: "",
            profile: "",
            email: "",
            password: "",
            position: "",
            department: "",
            employee_id: "",
            pan: "",
            aadhar: "",
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
                <br/>
                <br/>
                {/* <br/> */}
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="success">
                                <h3>ADD LEAD</h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={4}>
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="Name"
                                        type="text"
                                        fullWidth
                                        required="true"
                                        onChange={(event) => {
                                            this.setState({
                                                name:event.target.value
                                            })
                                        }}
                                        // value={executive.name}
                                    />

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        required="true"
                                        onChange={(event) => {
                                            this.setState({
                                                email:event.target.value
                                            })
                                        }}
                                        // value={executive.position}
                                    />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="Phone Number"
                                        type="text"
                                        fullWidth
                                        onChange={(event) => {
                                            this.setState({
                                                phone:event.target.value
                                            })
                                        }}
                                        // value={executive.employee_id}
                                    />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="Remark"
                                        required="true"
                                        type="email"
                                        fullWidth
                                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        onChange={(event) => {
                                            this.setState({
                                                remark:event.target.value
                                            })
                                        }}
                                        // value={executive.email}
                                    />
                                    <Grid container spacing={2} justify={"flex-end"}>
                                        <Grid item>
                                            <Button
                                                variant={"outlined"}
                                                style={{color: "#7ac44f"}}
                                                onClick={() => {
                                                    add_lead(
                                                        this.state.name,
                                                        this.state.email,
                                                         this.state.phone,
                                                         this.state.remark,
                                                        login.user_id
                                                    );
                                                    this.setState({
                                                        name:'',
                                                        email:'',
                                                        phone:'',
                                                        remark:''
                                                    })
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
                    <LoaderCon/>
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