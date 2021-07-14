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
import Icon from "@material-ui/core/Icon";
import {styles} from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import Avatar from "@material-ui/core/Avatar";

const card = {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    // marginTop: 50,
    margin:"100px 10px 10px 60px",
    width:"80vw",
};

// eslint-disable-next-line no-unused-vars


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.get_all_user(this.props.login.company_id)
    }

    handleClose = () => {
        this.setState({
            add: false,
            delete: false,
            update: false,
            thumbs_up_dialog: false,
            thumbs_down_dialog: false,
            users_dialog: false,
        })
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            user,
            category,
            get_all_category,
            delete_user,
            update_user,
            add_user,
            // toggle_active_user,
            login
        } = this.props;
        console.log(user.all_user)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW USER
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                {/*<Link to="add_user" style={{textDecoration: "none"}}>*/}
                                {/* <IconButton>
                                    <Icon>add</Icon>
                                </IconButton> */}
                                {/*</Link>*/}

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">&nbsp;&nbsp;Profile Pic</TableCell>
                                        <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                                         <TableCell align="left">E-Mail</TableCell>
                                         <TableCell align="left">Phone Number</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {user.all_user.map(row =>
                                        <TableRow>
                                            <TableCell align="left">&nbsp;&nbsp;<Avatar src={row.profile_pic} /></TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.email}</TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.phone}</TableCell>
                                             {/*<TableCell align="right">{row.quantity}</TableCell>*/}
                                            {login.user_id !== row._id &&
                                            <TableCell align={"right"}>
                                                <IconButton onClick={() => {
                                                    // view_all_users()
                                                    this.setState({users_dialog: true})
                                                }}>
                                                    <Icon>U</Icon>
                                                </IconButton>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        id: row._id,
                                                        name: row.name,
                                                        e_mail: row.e_mail,
                                                        phone_num: row.phone_num,
                                                        thumbs_up_dialog: true,
                                                    })
                                                }}>
                                                    <Icon>thumb_up_off_alt</Icon>
                                                </IconButton>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        id: row._id,
                                                        thumbs_down_dialog: true
                                                    })
                                                }}>
                                                    <Icon>thumb_down_off_alt</Icon>
                                                </IconButton>
                                            </TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
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

export default withStyles(styles)(User);
