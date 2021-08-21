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
import { Tooltip } from "@material-ui/core";

const card = {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    // marginTop: 100,
    margin:"100px 10px 10px 60px",
    width:"80vw",
   
};
// eslint-disable-next-line no-unused-vars
withStyles(theme => ({
    badge: {
        backgroundColor: "green",
        color: "green",
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

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            add: false,
            id: "",
            name: "",
            quantity: ""
        }
    }

    componentDidMount() {
        this.props.get_all_category(this.props.login.company_id)
    }

    handleClose = () => {
        this.setState({
            delete: false,
            update: false,
            add: false,
            /*id: "",
            name: "",
            quantity: ""*/

        })
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            category,
            delete_category,
            update_category,
            add_category,
            // toggle_active_category,
            login
        } = this.props;
        console.log(category.all_category)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW CATEGORY
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                {/*<Link to="add_category" style={{textDecoration: "none"}}>*/}
                                {/*<Tooltip title ='add catagory'>
                                <IconButton onClick={() => this.setState({add: true})}>
                                    <Icon>add</Icon>
                                </IconButton>
                                </Tooltip>*/}
                                {/*</Link>*/}

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                                        <TableCell align="left">Beverage Number</TableCell>
                                        {/*<TableCell align="right">Actions</TableCell>*/}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {category.all_category.map(row =>
                                        <TableRow>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            <TableCell align="left">{row.quantity}</TableCell>
                                            {/*{login.user_id !== row._id &&
                                            <TableCell align={"right"}>

                                                <Tooltip title ="Edit">
                                                  <IconButton onClick={() => {
                                                    this.setState({
                                                        update: true,
                                                        id: row._id,
                                                        name: row.name,
                                                        quantity: row.quantity,
                                                    })
                                                  }}>
                                                    <Icon>edit</Icon>
                                                  </IconButton>
                                                </Tooltip>

                                              <Tooltip title="Delete">
                                                <IconButton onClick={() => {
                                                    this.setState({delete: true, id: row._id})
                                                }}>
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                                </Tooltip>  
                                            </TableCell>}*/}
                                        </TableRow>
                                    )}
                                </TableBody>

                                <Dialog open={this.state.delete}
                                        onClose={this.handleClose}
                                        aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Delete Category</DialogTitle>
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
                                                delete_category(this.state.id,login.company_id);
                                                this.handleClose();
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
                                            margin="dense"
                                            // id="name"
                                            label="Beverage Number"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({quantity: event.target.value})
                                            }}
                                            value={this.state.quantity}
                                        />

                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.handleClose()} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                update_category(this.state.id, this.props.login.company_id, this.state.name, this.state.quantity)
                                                this.handleClose();
                                            }}
                                            color="primary"
                                        >
                                            Update
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                
                                <Dialog open={this.state.add} onClose={() => {
                                    this.handleClose()
                                }} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Enter the required fields, those needs to be added.
                                        </DialogContentText>

                                        <TextField
                                            autoFocus
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
                                            label="Beverage Number"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({beverage: event.target.value})
                                            }}
                                            value={this.state.beverage}
                                        />

                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.handleClose()} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                add_category(this.state.name, this.state.beverage, login.company_id);
                                                this.setState({name: "", quantity: ""});
                                            }}
                                            color="primary"
                                        >
                                            Add
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

export default withStyles(styles)(Category);
