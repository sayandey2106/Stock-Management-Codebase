import React, {Component} from "react";
import "./dashboard.css";

import Card1 from "./card1";
import Card2 from "./card2";

import EqualizerIcon from "@material-ui/icons/Equalizer";
import TodayIcon from "@material-ui/icons/Today";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import {styles} from "../../styles/style";
import withStyles from "@material-ui/core/styles/withStyles";
import LoaderCon from "../../containers/loader/loader_cont";
import MaterialTable from "material-table";
import {delete_request} from "../../actions/request/requestActions";

// import TableThree from './TableThree';
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Icon, IconButton, MenuItem, TextField, Tooltip} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user_id: "",
            delete: false,
            category_id: "",
            category: "",
        };
    }

    welcome() {
        this.props.get_total_users(this.props.login.company_id);
        this.props.get_all_category(this.props.login.company_id)
    }

    componentDidMount() {
        // this.props.setLoader()
        this.welcome();
        // this.props.unsetLoader()
        // this.setState({data: this.props.dashboard.users_consumption})
    }

    handleClose = () => {
        this.setState({
            delete: false,
            update: false,
            add: false,
            /*id: "",
                  name: "",
                  quantity: ""*/
        });
    };

    render() {
        // console.log("after you", this.props.category.category_list)
        const {
            snackbar,
            close_snack_bar,
            category,
            login,
            get_all_category,
            dashboard,
            delete_request,
            change_category,
        } = this.props;
        console.log(dashboard.users_consumption);
        /*const data = [...dashboard.users_consumption]*/
        const columns = [
            {title: "Employee ID", field: "employeeId"},
            {title: "Name", field: "name"},
            {title: "Consumption", field: "count", align: "center", editable: 'never'},
            {title: "Category", field: "category_id",lookup: this.props.category.category_list},
        ];
        /*const data = [
                { name: "client1", number: 4, id: 3 },
                { name: "client2", number: 24, id: 32 },
                { name: "client3", number: 4, id: 23 },
            ];*/
        // const data = [...dashboard.users_consumption]

        console.log("dashboard data aaaai", dashboard);
        return (
            <div className="dashboard">
                <div className="dashboard-heading">
                    <h2>ADMIN DASHBOARD</h2>
                </div>

                <div className="dashboard-container">
                    <div className="container-1">
                        <div className="cards">
                            <Card1
                                color={"card-one-1"}
                                number={dashboard.total_consumption}
                                cardName={"Total Consumption"}
                            />
                            <Card1
                                color={"card-one-2"}
                                // number={"₹" + dashboard.company_balance.toLocaleString() + "/-"}
                                number={dashboard.company_balance}
                                //   number={490}
                                cardName={"Credit"}
                                Button={true}
                                isRemaining={true}
                                id={login.company_id}

                            />


                            <Card1
                                color={"card-one-3"}
                                number={dashboard.total_users.length}
                                cardName={"Total Users"}
                            />
                        </div>

                        <div className="table">
                            {/*<div style={{position: "relative", top: "-30px", height: "500px"}}>

                                <CardContent style={cardcontent}>

                                    <Grid item style={griditem}>
                                        <h2 style={h3style}>Entries Today</h2>
                                    </Grid>

                                    <Table style={Tablestyle}>
                                        <TableHead style={headstyle}>
                                            <TableRow>
                                                <TableCell align="left">Employee ID</TableCell>
                                                <TableCell align="center">Name</TableCell>
                                                <TableCell align="center">Consumption</TableCell>
                                                <TableCell align="center">Action</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {dashboard.users_consumption.map((row) => (
                                                <TableRow style={rowstyle}>
                                                    <TableCell align="left">{row.employeeId}</TableCell>
                                                    <TableCell align="center">{row.name}</TableCell>
                                                    <TableCell align="center">{row.count}</TableCell>
                                                    <TableCell align="center">

                                                        <Tooltip title="Delete">
                                                            <IconButton onClick={() => {
                                                                this.setState({id: row.user_id, delete: true})
                                                            }}>
                                                                <Icon>delete</Icon>
                                                            </IconButton>
                                                        </Tooltip>

                                                    </TableCell>
                                                </TableRow>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </div>
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
                                            this.setState({delete: false});
                                        }}
                                        color="primary"
                                    >
                                        No
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            this.welcome()
                                            delete_request(this.state.id, login.company_id);
                                            this.setState({delete: false});
                                        }}
                                        color="primary"
                                    >
                                        Yes
                                    </Button>
                                </DialogActions>
                            </Dialog>*/}

                            {/*<TableThree/>*/}
                            {/*<Table data={dashboard.users_consumption}/>*/}
                            <div>
                                <MaterialTable
                                    title="Users"
                                    data={dashboard.users_consumption}
                                    columns={columns}
                                    options={{
                                        paging: false,
                                        headerStyle: {
                                            backgroundColor: "#01579b",
                                            color: "#FFF",
                                        },
                                        rowStyle: {
                                            backgroundColor: "#EEE",
                                        },
                                        actionsColumnIndex: -1,
                                        search: true,
                                        maxBodyHeight: 300,
                                        minBodyHeight: 300,
                                    }}
                                    /*actions={[
                                        {
                                            icon: 'edit',
                                            tooltip: 'Edit Category',
                                            onClick: (event, row) => {
                                                this.setState({
                                                    update: true,
                                                    user_id: row.user_id,
                                                    category_id: row.category_id,
                                                    category: row.category,
                                                });
                                                get_all_category(login.company_id);
                                            }}
                                    ]}*/
                                    editable={{
                                        onRowDelete: (oldData) =>
                                            new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                    delete_request(
                                                        oldData.user_id,
                                                        this.props.login.company_id
                                                    );
                                                    // const dataDelete = [...data];
                                                    // const index = oldData.tableData.id;
                                                    // dataDelete.splice(index, 1);
                                                    // setData([...dataDelete]);
                                                    resolve();
                                                }, 1000);
                                            }),
                                        onRowUpdate: (newData, oldData) =>
                                            new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                   /* const dataUpdate = [...data];
                                                    const index = oldData.tableData.id;
                                                    dataUpdate[index] = newData;
                                                    setData([...dataUpdate]);*/
                                                    change_category(login.company_id, oldData.user_id, newData.employeeId, newData.name, newData.category_id)

                                                    resolve();
                                                }, 1000)
                                            }),

                                    }}
                                />
                                <Dialog
                                    open={this.state.update}
                                    onClose={() => {
                                        this.handleClose();
                                    }}
                                    aria-labelledby="form-dialog-title"
                                >
                                    <DialogTitle id="form-dialog-title">Edit Category</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>Choose Category</DialogContentText>
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Category"
                                            type="dropdown"
                                            select
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({category_id: event.target.value});
                                            }}
                                            InputProps={{
                                                classes: {input: this.props.classes.dropdown},
                                            }}
                                        >
                                            {category.all_category.map((row1) => (
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
                                                change_category(
                                                    login.company_id,
                                                    this.state.user_id,
                                                    this.state.category_id,
                                                );
                                            }}
                                            color="primary"
                                        >
                                            Update
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                    </div>

                    <div className="container-2">
                        <div className="row">
                            <Card2
                                color={"card-one-4"}
                                symbol={<EqualizerIcon/>}
                                cardName={"This month Consumption"}
                                number={dashboard.consumption_per_month}
                            />
                            <Card2
                                color={"card-one-5"}
                                symbol={<TodayIcon/>}
                                cardName={"Today Consumption"}
                                number={dashboard.consumption_per_day}
                            />
                        </div>

                        <div className="row row-2">
                            <Card2
                                color={"card-one-5"}
                                symbol={<PersonAddIcon/>}
                                cardName={"Pending Request"}
                                number={dashboard.corporate_requests.length}
                            />
                            <Card2
                                color={"card-one-4"}
                                symbol={<QueryBuilderIcon/>}
                                cardName={"Coupon Validity"}
                                number={0}
                            />
                        </div>

                        <LoaderCon/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
