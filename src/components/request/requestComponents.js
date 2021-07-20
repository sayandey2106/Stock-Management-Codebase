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
import MenuItem from "@material-ui/core/MenuItem";
import {approve_corporate_request} from "../../actions/request/requestActions";
import { Tooltip } from "@material-ui/core";

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    // marginTop: 50,
    margin:"100px 10px 10px 60px",
    width:"80vw",
};

// eslint-disable-next-line no-unused-vars


class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            add: false,
            thumbs_up_dialog: false,
            thumbs_down_dialog: false,
            users_dialog: false,
            category: '',
            id: "",
            name: "",
            e_mail: "",
            phone_num: ""
        }
    }

    componentDidMount() {
        this.props.get_all_request(this.props.login.company_id)
        this.props.get_all_category(this.props.login.company_id)
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
            request,
            category,
            approve_corporate_request,
            get_all_category,
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
                                {/* <IconButton>
                                    <Icon>add</Icon>
                                </IconButton> */}
                                {/*</Link>*/}

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">&nbsp;&nbsp;Employee ID</TableCell>
                                        {/* <TableCell align="left">E-Mail</TableCell> */}
                                        {/* <TableCell align="left">Phone Number</TableCell> */}
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {request.all_request.map(row =>
                                        <TableRow>
                                            <TableCell align="left">&nbsp;&nbsp;{row.employeeId}</TableCell>
                                            {/* <TableCell align="left">{row.quantity}</TableCell> */}
                                            {login.user_id !== row._id &&
                                            <TableCell align={"right"}>

                                                <Tooltip title="User Profile">
                                                <IconButton onClick={() => {
                                                    // view_all_users()
                                                    this.setState({users_dialog:true})
                                                }}>
                                                    <Icon>U</Icon>
                                                </IconButton>
                                                </Tooltip>

                                                <Tooltip title ="Approve">
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        id: row._id,
                                                        user_id: row.user_id,
                                                        thumbs_up_dialog: true,
                                                    })

                                                }}>
                                                    <Icon>thumb_up_off_alt</Icon>
                                                </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Disapprove">
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                            id: row._id,
                                                            thumbs_down_dialog: true
                                                        })
                                                }}>
                                                    <Icon>thumb_down_off_alt</Icon>
                                                </IconButton>
                                                </Tooltip> 
                                            </TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>

                            <Dialog open={this.state.thumbs_up_dialog} onClose={() => {
                                this.handleClose()
                            }} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Choose Category</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        {/*Choose Category*/}
                                    </DialogContentText>

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="Categories"
                                        type="dropdown"
                                        select
                                        fullWidth
                                        onChange={(event) => {
                                            this.setState({category: event.target.value})
                                        }}
                                        value={this.state.category}
                                        InputLabelProps={{classes: {root: this.props.classes.textfieldLabel}}}
                                        // InputProps={{classes:{input:this.props.classes.dropdown}}}
                                    >
                                        {category.all_category.map(row1 => (
                                            <MenuItem value={row1._id} key={row1._id}>
                                                {row1.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => this.handleClose()} color="primary">
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            this.handleClose();
                                            // update_minorhead(this.state.id, this.state.name, this.state.majorhead_id, login.token)
                                            approve_corporate_request(this.state.user_id, login.company_id, this.state.category)
                                        }}
                                        color="primary"
                                    >
                                        Approve
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            <Dialog open={this.state.thumbs_down_dialog} onClose={() => {
                                this.handleClose()
                            }} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Discard Request</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Are you sure?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => this.handleClose()} color="primary">
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            this.handleClose();
                                            // update_minorhead(this.state.id, this.state.name, this.state.majorhead_id, login.token)
                                        }}
                                        color="primary"
                                    >
                                        Discard
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            <Dialog open={this.state.users_dialog} onClose={() => {
                                this.handleClose()
                            }} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Details of this User</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        {/*{users.all_user.name}*/}
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => this.handleClose()} color="primary">
                                        OK
                                    </Button>
                                    {/*<Button*/}
                                    {/*    onClick={() => {*/}
                                    {/*        this.handleClose();*/}
                                    {/*        // update_minorhead(this.state.id, this.state.name, this.state.majorhead_id, login.token)*/}
                                    {/*    }}*/}
                                    {/*    color="primary"*/}
                                    {/*>*/}
                                    {/*    Discard*/}
                                    {/*</Button>*/}
                                </DialogActions>
                            </Dialog>
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
