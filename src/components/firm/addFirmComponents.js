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
import {Avatar, Checkbox, MenuItem,} from "@material-ui/core";
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
import {view_majorheads_minorhead} from "../../actions/minorheads/minorheadActions";
// import {view_majorheads_minorhead} from "../../actions/minorheads/minorheadActions";


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

class AddFirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: "",
            name: "",
            type: "",
            reg: "",
            gst: "",
            din: "",
            pt: "",
            pf_esi: "",
            iec: "",
            ddo: "",
            majorhead_id:"",
            minorhead_id:"",
            checkedF: false
        }
    }

    componentDidMount() {
        this.props.get_all_client(this.props.login.token, this.props.login.organization_id);
        this.props.get_all_majorhead(this.props.login.token, this.props.login.organization_id);
        this.props.get_all_minorhead(this.props.login.token, this.props.login.organization_id);
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            firm,
            login,
            add_firm,
            set_firm_name,
            set_firm_type,
            set_firm_reg,
            set_firm_gst,
            set_firm_din,
            set_firm_pt,
            set_firm_pf_esi,
            set_firm_iec,
            set_firm_ddo,
            client,
            majorhead,
            minorhead,
            view_majorheads_minorhead

        } = this.props;
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    ADD ORGANIZATION
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
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
                                    <MenuItem value={row1._id} key={row1._id}>
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
                                    set_firm_type(event.target.value)
                                }}
                                value={firm.type}
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
                            {firm.type === 'C' ?
                                <Grid><TextField
                                    // autoFocus
                                    margin="dense"
                                    // id="name"
                                    label="Registration Number"
                                    type="text"
                                    fullWidth
                                    onChange={(event) => {
                                        set_firm_reg(event.target.value)
                                    }}
                                    value={firm.reg}
                                />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="GST"
                                        type="text"
                                        fullWidth
                                        onChange={(event) => {
                                            set_firm_gst(event.target.value)
                                        }}
                                        value={firm.gst}
                                    />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="PT"
                                        type="text"
                                        fullWidth
                                        onChange={(event) => {
                                            set_firm_pt(event.target.value)
                                        }}
                                        value={firm.pt}
                                    />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="PF_ESI ID"
                                        type="text"
                                        fullWidth
                                        onChange={(event) => {
                                            set_firm_pf_esi(event.target.value)
                                        }}
                                        value={firm.pf_esi}
                                    />
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="IEC"
                                        type="text"
                                        fullWidth
                                        onChange={(event) => {
                                            set_firm_iec(event.target.value)
                                        }}
                                        value={firm.iec}
                                    /></Grid>
                                : firm.type === 'G' ?
                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        // id="name"
                                        label="DDO"
                                        type="text"
                                        fullWidth
                                        onChange={(event) => {
                                            set_firm_ddo(event.target.value)
                                        }}
                                        value={firm.ddo}
                                    />
                                    : firm.type === 'I' ?
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="DIN"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                set_firm_din(event.target.value)
                                            }}
                                            value={firm.din}
                                        />
                                        : firm.type === 'T' ?
                                            <Grid><TextField
                                                // autoFocus
                                                margin="dense"
                                                // id="name"
                                                label="Registration Number"
                                                type="text"
                                                fullWidth
                                                onChange={(event) => {
                                                    set_firm_reg(event.target.value)
                                                }}
                                                value={firm.reg}
                                            />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="GST"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        set_firm_gst(event.target.value)
                                                    }}
                                                    value={firm.gst}
                                                />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="PT"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        set_firm_pt(event.target.value)
                                                    }}
                                                    value={firm.pt}
                                                />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="PF_ESI ID"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        set_firm_pf_esi(event.target.value)
                                                    }}
                                                    value={firm.pf_esi}
                                                />
                                                <TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="IEC"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        set_firm_iec(event.target.value)
                                                    }}
                                                    value={firm.iec}
                                                /></Grid>
                                            : firm.type === 'LP' ?
                                                <Grid><TextField
                                                    // autoFocus
                                                    margin="dense"
                                                    // id="name"
                                                    label="Registration Number"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        set_firm_reg(event.target.value)
                                                    }}
                                                    value={firm.reg}
                                                />
                                                    <TextField
                                                        // autoFocus
                                                        margin="dense"
                                                        // id="name"
                                                        label="PT"
                                                        type="text"
                                                        fullWidth
                                                        onChange={(event) => {
                                                            set_firm_pt(event.target.value)
                                                        }}
                                                        value={firm.pt}
                                                    />
                                                    <TextField
                                                        // autoFocus
                                                        margin="dense"
                                                        // id="name"
                                                        label="PF_ESI ID"
                                                        type="text"
                                                        fullWidth
                                                        onChange={(event) => {
                                                            set_firm_pf_esi(event.target.value)
                                                        }}
                                                        value={firm.pf_esi}
                                                    />
                                                    <TextField
                                                        // autoFocus
                                                        margin="dense"
                                                        // id="name"
                                                        label="IEC"
                                                        type="text"
                                                        fullWidth
                                                        onChange={(event) => {
                                                            set_firm_iec(event.target.value)
                                                        }}
                                                        value={firm.iec}
                                                    /></Grid>
                                                : firm.type === 'P' ?
                                                    <Grid><TextField
                                                        // autoFocus
                                                        margin="dense"
                                                        // id="name"
                                                        label="Registration Number"
                                                        type="text"
                                                        fullWidth
                                                        onChange={(event) => {
                                                            set_firm_reg(event.target.value)
                                                        }}
                                                        value={firm.reg}
                                                    />
                                                        <TextField
                                                            // autoFocus
                                                            margin="dense"
                                                            // id="name"
                                                            label="GST"
                                                            type="text"
                                                            fullWidth
                                                            onChange={(event) => {
                                                                set_firm_gst(event.target.value)
                                                            }}
                                                            value={firm.gst}
                                                        />
                                                        <TextField
                                                            // autoFocus
                                                            margin="dense"
                                                            // id="name"
                                                            label="PT"
                                                            type="text"
                                                            fullWidth
                                                            onChange={(event) => {
                                                                set_firm_pt(event.target.value)
                                                            }}
                                                            value={firm.pt}
                                                        />
                                                        <TextField
                                                            // autoFocus
                                                            margin="dense"
                                                            // id="name"
                                                            label="PF_ESI ID"
                                                            type="text"
                                                            fullWidth
                                                            onChange={(event) => {
                                                                set_firm_pf_esi(event.target.value)
                                                            }}
                                                            value={firm.pf_esi}
                                                        />
                                                        <TextField
                                                            // autoFocus
                                                            margin="dense"
                                                            // id="name"
                                                            label="IEC"
                                                            type="text"
                                                            fullWidth
                                                            onChange={(event) => {
                                                                set_firm_iec(event.target.value)
                                                            }}
                                                            value={firm.iec}
                                                        /></Grid>
                                                    : firm.type === '' ?
                                                        <Grid><TextField
                                                            // autoFocus
                                                            margin="dense"
                                                            // id="name"
                                                            label="Registration Number"
                                                            type="text"
                                                            fullWidth
                                                            onChange={(event) => {
                                                                set_firm_reg(event.target.value)
                                                            }}
                                                            value={firm.reg}
                                                        />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="GST"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_gst(event.target.value)
                                                                }}
                                                                value={firm.gst}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="DIN"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_din(event.target.value)
                                                                }}
                                                                value={firm.din}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="PT"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_pt(event.target.value)
                                                                }}
                                                                value={firm.pt}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="PF_ESI ID"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_pf_esi(event.target.value)
                                                                }}
                                                                value={firm.pf_esi}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="IEC"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_iec(event.target.value)
                                                                }}
                                                                value={firm.iec}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="DDO"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_ddo(event.target.value)
                                                                }}
                                                                value={firm.ddo}
                                                            /></Grid>
                                                        : <Grid> <TextField
                                                            // autoFocus
                                                            margin="dense"
                                                            // id="name"
                                                            label="PT"
                                                            type="text"
                                                            fullWidth
                                                            onChange={(event) => {
                                                                set_firm_pt(event.target.value)
                                                            }}
                                                            value={firm.pt}
                                                        />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="PF_ESI ID"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_pf_esi(event.target.value)
                                                                }}
                                                                value={firm.pf_esi}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="IEC"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_iec(event.target.value)
                                                                }}
                                                                value={firm.iec}
                                                            />
                                                            <TextField
                                                                // autoFocus
                                                                margin="dense"
                                                                // id="name"
                                                                label="GST"
                                                                type="text"
                                                                fullWidth
                                                                onChange={(event) => {
                                                                    set_firm_gst(event.target.value)
                                                                }}
                                                                value={firm.gst}
                                                            /></Grid>}

                            <TextField
                                autoFocus
                                margin="dense"
                                // id="name"
                                label="Majorhead ID"
                                // type="text"
                                select
                                fullWidth
                                onChange={(event) => {
                                    this.setState({majorhead_id: event.target.value});
                                    view_majorheads_minorhead(this.state.majorhead_id, this.props.login.token);
                                }}
                                value={this.state.majorhead_id}
                                InputLabelProps={{classes: {root: this.props.classes.textfieldLabel}}}
                            >
                                {majorhead.all_majorhead.map(row1 => (
                                    <MenuItem value={row1._id} key={row1._id}>
                                        {row1.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                autoFocus
                                margin="dense"
                                // id="name"
                                label="Minorhead ID"
                                // type="text"
                                select
                                fullWidth
                                onChange={(event) => {
                                    this.setState({minorhead_id: event.target.value});
                                }}
                                value={this.state.minorhead_id}
                                InputLabelProps={{classes: {root: this.props.classes.textfieldLabel}}}
                            >
                                {minorhead.majorhead_minorhead.map(row1 => (
                                    <MenuItem value={row1._id} key={row1._id}>
                                        {row1.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Checkbox
                                checked={this.state.checkedF}
                                onChange={(event) => {
                                    this.setState({checkedF: !this.state.checkedF})
                                }}
                                // indeterminate
                                color={"default"}
                            /> Is Recursive?<br />
                            <Button onClick={() => {
                                add_firm(firm, login.token, login.organization_id)
                            }}>
                                SUBMIT
                            </Button>
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

export default withStyles(styles)(AddFirm)
