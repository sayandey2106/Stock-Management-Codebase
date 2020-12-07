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
import {Avatar, MenuItem,} from "@material-ui/core";
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
// import {add_minorhead} from "../../actions/minorhead/minorheadActions";

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

class MinorheadComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            add:false,
            id: "",
            name: "",
            majorhead_id:""
        }
    }

    componentDidMount() {
        this.props.get_all_minorhead(this.props.login.token)
    }

    handleClose = () => {
        this.setState({delete: false, update:false, add:false, id:"", name:""})
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            minorhead,
            majorhead,
            delete_minorhead,
            update_minorhead,
            login,
            add_minorhead,
            get_all_majorhead
        } = this.props;
        console.log(minorhead.all_minorhead)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW MINORHEAD
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                {/*<Link to="add_minorhead" style={{textDecoration: "none"}}>*/}
                                <IconButton onClick={()=>
                                {this.setState({add:true});
                                get_all_majorhead(login.token)}}>
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
                                    {minorhead.all_minorhead.map(row =>
                                        <TableRow key={row._id}>
                                            <TableCell></TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            <TableCell align={"right"}>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        update: true,
                                                        id:row._id,
                                                        name: row.name,
                                                        majorhead_id:row.majorhead_id
                                                    });
                                                    get_all_majorhead(login.token)
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
                                    <DialogTitle id="form-dialog-title">Delete Minorhead</DialogTitle>
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
                                                delete_minorhead(this.state.id, login.token)
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
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Name"
                                            type="dropdown"
                                            select
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({majorhead_id: event.target.value})
                                            }}
                                            value={this.state.majorhead_id}
                                            InputLabelProps={{classes:{root:this.props.classes.textfieldLabel}}}
                                            // InputProps={{classes:{input:this.props.classes.dropdown}}}
                                        >
                                            {majorhead.all_majorhead.map(row1=>(
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
                                                update_minorhead(this.state.id, this.state.name, this.state.majorhead_id, login.token)
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
                                    <DialogTitle id="form-dialog-title">Add Minorhead</DialogTitle>
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
                                            <TextField
                                                // autoFocus
                                                margin="dense"
                                                // id="name"
                                                label="Name"
                                                type="dropdown"
                                                select
                                                fullWidth
                                                onChange={(event) => {
                                                    this.setState({majorhead_id: event.target.value})
                                                }}
                                                value={this.state.majorhead_id}
                                                InputLabelProps={{classes:{root:this.props.classes.textfieldLabel}}}
                                                // InputProps={{classes:{input:this.props.classes.dropdown}}}
                                            >
                                                {majorhead.all_majorhead.map(row=>(
                                                    <MenuItem value={row._id} key={row._id}>
                                                        {row.name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
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
                                                add_minorhead(this.state.name, this.state.majorhead_id, login.token)
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

export default withStyles(styles)(MinorheadComponents);