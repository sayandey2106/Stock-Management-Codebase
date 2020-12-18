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
import {Avatar, Badge, colors, MenuItem,} from "@material-ui/core";
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

const StyledBadgeRed = withStyles(theme => ({
    badge: {
        backgroundColor: "red",
        color: "red",
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

const StyledBadgeBlue = withStyles(theme => ({
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

const StyledBadgeGreen = withStyles(theme => ({
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

class FirmComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            id: "",
            client_id:"",
            name:"",
            type: "",
            reg: "",
            gst: "",
            din: "",
            pt: "",
            pf_esi: "",
            iec: "",
            ddo: "",
        }
    }

    componentDidMount() {
        this.props.get_all_firm(this.props.login.token, this.props.login.organization_id);
        this.props.get_all_client(this.props.login.token, this.props.login.organization_id);
    }


    handleClose = () => {
        this.setState({delete: false})
        this.setState({update: false})
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            firm,
            client,
            delete_firm,
            update_firm,
            login
        } = this.props;
        // console.log(firm.all_firm)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW firm
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                <Link to="add_firm" style={{textDecoration: "none"}}>
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
                                        {/*<TableCell align="left">Client_ID</TableCell>*/}
                                        <TableCell align="left">Type</TableCell>
                                        <TableCell align="left">Registration Number</TableCell>
                                        <TableCell align="left">GST</TableCell>
                                        <TableCell align="left">DIN</TableCell>
                                        <TableCell align="left">PT</TableCell>
                                        <TableCell align="left">PF_ESI</TableCell>
                                        <TableCell align="left">IEC</TableCell>
                                        <TableCell align="left">DDO</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {firm.all_firm.map(row =>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            {/*<TableCell align="left">{row.client_id}</TableCell>*/}
                                            <TableCell align="left">{row.type}</TableCell>
                                            <TableCell align="left">{row.reg_num}</TableCell>
                                            <TableCell align="left">{row.gst_num}</TableCell>
                                            <TableCell align="left">{row.din_num}</TableCell>
                                            <TableCell align="left">{row.pt_num}</TableCell>
                                            <TableCell align="left">{row.pf_esi_num}</TableCell>
                                            <TableCell align="left">{row.iec_num}</TableCell>
                                            <TableCell align="left">{row.ddo_num}</TableCell>
                                            <TableCell align={"right"}>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        update: true,
                                                        id: row._id,
                                                        name: row.name,
                                                        type: row.type,
                                                        reg: row.reg_num,
                                                        gst: row.gst_num,
                                                        din: row.din_num,
                                                        pt: row.pt_num,
                                                        pf_esi: row.pf_esi_num,
                                                        iec: row.iec_num,
                                                        ddo: row.ddo_num,
                                                        client_id: row.client_id
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
                                    <DialogTitle id="form-dialog-title">Delete firm</DialogTitle>
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
                                                delete_firm(this.state.id, login.token, login.organization_id)
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
                                            autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Name"
                                            type="text"
                                            // select
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({name: event.target.value})
                                            }}
                                            value={this.state.name}
                                            // InputLabelProps={{classes: {root: this.props.classes.textfieldLabel}}}
                                        />
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Client ID"
                                            // type="text"
                                            select
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({client_id: event.target.value})
                                            }}
                                            value={this.state.client_id}
                                            InputLabelProps={{classes: {root: this.props.classes.textfieldLabel}}}
                                        >
                                            {client.all_client.map(row1 => (
                                                <MenuItem value={row1._id}>
                                                    {row1.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Type"
                                            // type="text"
                                            select
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({type: event.target.value})
                                            }}
                                            value={this.state.type}
                                            InputLabelProps={{classes: {root: this.props.classes.textfieldLabel}}}
                                        >
                                            <MenuItem value={"C"}>
                                                Company
                                            </MenuItem>
                                            <MenuItem value={"G"}>
                                                Govt.entity
                                            </MenuItem>
                                            <MenuItem value={"I"}>
                                                Individual
                                            </MenuItem>
                                            <MenuItem value={"LP"}>
                                                LLP
                                            </MenuItem>
                                            <MenuItem value={"P"}>
                                                Partnership Firms
                                            </MenuItem>
                                            <MenuItem value={"PR"}>
                                                Proprietorship Firms
                                            </MenuItem>
                                            <MenuItem value={"T"}>
                                                Trust
                                            </MenuItem>
                                        </TextField>
                                        {this.state.type === 'C' ?
                                            <Grid><TextField
                                                // autoFocus
                                                margin="dense"
                                                // id="name"
                                                label="Registration Number"
                                                type="text"
                                                fullWidth
                                                onChange={(event) => {
                                                    this.setState({type:event.target.value})
                                                }}
                                                value={this.state.reg}
                                            />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="GST"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        this.setState({gst:event.target.value})
                                                    }}
                                                    value={this.state.gst}
                                                />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="PT"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        this.setState({pt:event.target.value})
                                                    }}
                                                    value={this.state.pt}
                                                />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="PF_ESI ID"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        this.setState({pf_esi:event.target.value})
                                                    }}
                                                    value={this.state.pf_esi}
                                                />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="IEC"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        this.setState({iec:event.target.value})
                                                    }}
                                                    value={this.state.iec}
                                                /></Grid>
                                            : this.state.type === 'G' ?
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="DDO"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        this.setState({ddo:event.target.value})
                                                    }}
                                                    value={this.state.ddo}
                                                />
                                                : this.state.type === 'I' ?
                                                    <TextField
                                                        // autoFocus
                                                        margin="dense"
                                                        // id="name"
                                                        label="DIN"
                                                        type="text"
                                                        fullWidth
                                                        onChange={(event) => {
                                                            this.setState({din:event.target.value})
                                                        }}
                                                        value={this.state.din}
                                                    />
                                                    : this.state.type === 'T' ?
                                                        <Grid><TextField
                                                            // autoFocus
                                                            margin="dense"
                                                            // id="name"
                                                            label="Registration Number"
                                                            type="text"
                                                            fullWidth
                                                            onChange={(event) => {
                                                                this.setState({reg:event.target.value})
                                                            }}
                                                            value={this.state.reg}
                                                        />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="GST"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    this.setState({gst:event.target.value})
                                                                }}
                                                                value={this.state.gst}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="PT"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    this.setState({pt:event.target.value})
                                                                }}
                                                                value={this.state.pt}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="PF_ESI ID"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    this.setState({pf_esi:event.target.value})
                                                                }}
                                                                value={this.state.pf_esi}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="IEC"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    this.setState({iec:event.target.value})
                                                                }}
                                                                value={this.state.iec}
                                                            /></Grid>
                                                        : this.state.type === 'LP' ?
                                                            <Grid><TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="Registration Number"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    this.setState({reg:event.target.value})
                                                                }}
                                                                value={this.state.reg}
                                                            />
                                                                <TextField
                                                                    // autoFocus
                                                                    margin="dense"
                                                                    // id="name"
                                                                    label="PT"
                                                                    type="text"
                                                                    fullWidth
                                                                    onChange={(event) => {
                                                                        this.setState({pt:event.target.value})
                                                                    }}
                                                                    value={this.state.pt}
                                                                />
                                                                <TextField
                                                                    // autoFocus
                                                                    margin="dense"
                                                                    // id="name"
                                                                    label="PF_ESI ID"
                                                                    type="text"
                                                                    fullWidth
                                                                    onChange={(event) => {
                                                                        this.setState({pf_esi:event.target.value})
                                                                    }}
                                                                    value={this.state.pf_esi}
                                                                />
                                                                <TextField
                                                                    // autoFocus
                                                                    margin="dense"
                                                                    // id="name"
                                                                    label="IEC"
                                                                    type="text"
                                                                    fullWidth
                                                                    onChange={(event) => {
                                                                        this.setState({iec:event.target.value})
                                                                    }}
                                                                    value={this.state.iec}
                                                                /></Grid>
                                                            : this.state.type === 'P' ?
                                                                <Grid><TextField
                                                                    // autoFocus
                                                                    margin="dense"
                                                                    // id="name"
                                                                    label="Registration Number"
                                                                    type="text"
                                                                    fullWidth
                                                                    onChange={(event) => {
                                                                        this.setState({reg:event.target.value})
                                                                    }}
                                                                    value={this.state.reg}
                                                                />
                                                                    <TextField
                                                                        // autoFocus
                                                                        margin="dense"
                                                                        // id="name"
                                                                        label="GST"
                                                                        type="text"
                                                                        fullWidth
                                                                        onChange={(event) => {
                                                                            this.setState({gst:event.target.value})
                                                                        }}
                                                                        value={this.state.gst}
                                                                    />
                                                                    <TextField
                                                                        // autoFocus
                                                                        margin="dense"
                                                                        // id="name"
                                                                        label="PT"
                                                                        type="text"
                                                                        fullWidth
                                                                        onChange={(event) => {
                                                                            this.setState({pt:event.target.value})
                                                                        }}
                                                                        value={this.state.pt}
                                                                    />
                                                                    <TextField
                                                                        // autoFocus
                                                                        margin="dense"
                                                                        // id="name"
                                                                        label="PF_ESI ID"
                                                                        type="text"
                                                                        fullWidth
                                                                        onChange={(event) => {
                                                                            this.setState({pf_esi:event.target.value})
                                                                        }}
                                                                        value={this.state.pf_esi}
                                                                    />
                                                                    <TextField
                                                                        // autoFocus
                                                                        margin="dense"
                                                                        // id="name"
                                                                        label="IEC"
                                                                        type="text"
                                                                        fullWidth
                                                                        onChange={(event) => {
                                                                            this.setState({iec:event.target.value})
                                                                        }}
                                                                        value={this.state.iec}
                                                                    /></Grid>
                                                                : this.state.type === '' ?
                                                                    <Grid><TextField
                                                                        // autoFocus
                                                                        margin="dense"
                                                                        // id="name"
                                                                        label="Registration Number"
                                                                        type="text"
                                                                        fullWidth
                                                                        onChange={(event) => {
                                                                            this.setState({reg:event.target.value})
                                                                        }}
                                                                        value={this.state.reg}
                                                                    />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="GST"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({gst:event.target.value})
                                                                            }}
                                                                            value={this.state.gst}
                                                                        />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="DIN"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({din:event.target.value})
                                                                            }}
                                                                            value={this.state.din}
                                                                        />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="PT"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({pt:event.target.value})
                                                                            }}
                                                                            value={this.state.pt}
                                                                        />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="PF_ESI ID"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({pf_esi:event.target.value})
                                                                            }}
                                                                            value={this.state.pf_esi}
                                                                        />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="IEC"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({iec:event.target.value})
                                                                            }}
                                                                            value={this.state.iec}
                                                                        />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="DDO"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({ddo:event.target.value})
                                                                            }}
                                                                            value={this.state.ddo}
                                                                        /></Grid>
                                                                    : <Grid> <TextField
                                                                        // autoFocus
                                                                        margin="dense"
                                                                        // id="name"
                                                                        label="PT"
                                                                        type="text"
                                                                        fullWidth
                                                                        onChange={(event) => {
                                                                            this.setState({pt:event.target.value})
                                                                        }}
                                                                        value={this.state.pt}
                                                                    />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="PF_ESI ID"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({pf_esi:event.target.value})
                                                                            }}
                                                                            value={this.state.pf_esi}
                                                                        />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="IEC"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({iec:event.target.value})
                                                                            }}
                                                                            value={this.state.iec}
                                                                        />
                                                                        <TextField
                                                                            // autoFocus
                                                                            margin="dense"
                                                                            // id="name"
                                                                            label="GST"
                                                                            type="text"
                                                                            fullWidth
                                                                            onChange={(event) => {
                                                                                this.setState({gst:event.target.value})
                                                                            }}
                                                                            value={this.state.gst}
                                                                        /></Grid>}

                                        {/*<TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Registration Number"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({reg: event.target.value})
                                            }}
                                            value={this.state.reg}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="GST"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({gst: event.target.value})
                                            }}
                                            value={this.state.gst}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="DIN"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({din: event.target.value})
                                            }}
                                            value={this.state.din}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="PT"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({pt: event.target.value})
                                            }}
                                            value={this.state.pt}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="PF_ESI"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({pf_esi: event.target.value})
                                            }}
                                            value={this.state.pf_esi}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="IEC"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({iec: event.target.value})
                                            }}
                                            value={this.state.iec}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="DDO"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({ddo: event.target.value})
                                            }}
                                            value={this.state.ddo}
                                        />*/}
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.handleClose()} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                update_firm(this.state.id, this.state.client_id, this.state.type, this.state.reg, this.state.gst, this.state.din, this.state.pt, this.state.pf_esi, this.state.iec, this.state.ddo, login.token, login.organization_id)
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

export default withStyles(styles)(FirmComponents);
