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
import {Badge} from "@material-ui/core";
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
// eslint-disable-next-line no-unused-vars


class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            add: false,
            id: "",
            name: "",
            e_mail: "",
            phone_num: ""
        }
    }

    componentDidMount() {
        this.props.get_all_request(this.props.login.token, this.props.login.organization_id)
    }

    handleClose = () => {
        this.setState({delete: false})
        this.setState({update: false})
        this.setState({add: false})
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            request,
            delete_request,
            update_request,
            add_request,
            // toggle_active_request,
            login
        } = this.props;
        console.log(request.all_request)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW REQUEST
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                {/*<Link to="add_request" style={{textDecoration: "none"}}>*/}
                                <IconButton>
                                    <Icon>add</Icon>
                                </IconButton>
                                {/*</Link>*/}

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                                        <TableCell align="left">E-Mail</TableCell>
                                        <TableCell align="left">Phone Number</TableCell>
                                        <TableCell align="left">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {request.all_request.map(row =>
                                        <TableRow>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            <TableCell align="left">{row.quantity}</TableCell>
                                            {login.user_id !== row._id &&
                                            <TableCell align={"right"}>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        id: row._id,
                                                        name: row.name,
                                                        e_mail: row.e_mail,
                                                        phone_num: row.phone_num
                                                    })
                                                }}>
                                                    <Icon>thumb_up_off_alt</Icon>
                                                </IconButton>
                                                <IconButton onClick={() => {
                                                    this.setState({id: row._id})
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

export default withStyles(styles)(Request);
