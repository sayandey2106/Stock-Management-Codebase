import React, {Component} from 'react';
import './dashboard.css';

import Card1 from './card1';
import Card2 from './card2';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import TodayIcon from '@material-ui/icons/Today';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
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
import {Icon, IconButton, Tooltip} from "@material-ui/core";
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
            id: "",
            delete: false,
        }
    }

    welcome() {
        this.props.get_total_users(this.props.login.company_id)
        /*this.props.get_total_consumption(this.props.login.company_id)
        this.props.get_consumption_per_day(this.props.login.company_id)
        this.props.get_consumption_per_month(this.props.login.company_id)
        this.props.view_corporate_requests(this.props.login.company_id)
        this.props.view_company_balance(this.props.login.company_id)
        this.props.view_users_consumption(this.props.login.company_id)*/
    }

    componentDidMount() {
        // this.props.setLoader()
        this.welcome()
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

        })
    }

    render() {
        const {
            dashboard,
            delete_request,
            login,
        } = this.props;
        console.log(dashboard.users_consumption)
        /*const data = [...dashboard.users_consumption]*/
        const
            columns = [
                {title: 'Employee ID', field: 'employeeId'},
                {title: 'Name', field: 'name'},
                {title: 'Consumption', field: 'count', align: 'center'}
            ]
        /*const data = [
            { name: "client1", number: 4, id: 3 },
            { name: "client2", number: 24, id: 32 },
            { name: "client3", number: 4, id: 23 },
        ];*/
        // const data = [...dashboard.users_consumption]

        const cardcontent = {
            position: "relative",
            width: "769px",
        };
        const griditem = {
            margin: "0px",
            height: "50px",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
        };
        const Tablestyle = {
            position: "relative",
            width: "740px",
            // height: "500px"
        };
        const headstyle = {
            position: "relative",
            backgroundColor: "#01579b",
        };
        const rowstyle = {
            position: "relative",
            backgroundColor: "#EEE",

        };
        const h3style = {
            position: "relative",
            paddingLeft: "20px",
            fontFamily: "'Montserrat', sans-serif",
        };

        console.log("dashboard data aaaai", dashboard)
        return (

            <div className="dashboard">

                <div className="dashboard-heading">
                    <h2>ADMIN DASHBOARD</h2>
                </div>

                <div className="dashboard-container">

                    <div className="container-1">

                        <div className="cards">
                            <Card1 color={"card-one-1"} number={dashboard.total_consumption}
                                   cardName={"Total Consumption"}/>
                            <Card1 color={"card-one-2"} number={dashboard.company_balance} cardName={"Total Due"}/>
                            <Card1 color={"card-one-3"} number={dashboard.total_users.length} cardName={"Total Users"}/>
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
                                        paging: true,
                                        headerStyle: {
                                            backgroundColor: '#01579b',
                                            color: '#FFF'
                                        },
                                        rowStyle: {
                                            backgroundColor: '#EEE',
                                        },
                                        actionsColumnIndex: -1,
                                        search: true,

                                    }}

                                    editable={{
                                        
                                        onRowDelete: oldData =>
                                            new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                    delete_request(oldData.user_id, this.props.login.company_id)
                                                    // const dataDelete = [...data];
                                                    // const index = oldData.tableData.id;
                                                    // dataDelete.splice(index, 1);
                                                    // setData([...dataDelete]);
                                                    resolve();
                                                }, 1000)
                                            }),
                                    }}

                                />

                                </div>
                        </div>

                    </div>

                    <div className="container-2">

                        <div className='row'>
                            <Card2 color={"card-one-4"} symbol={<EqualizerIcon/>}
                                   cardName={"Consumption (Per     Month)"}
                                   number={dashboard.consumption_per_month}/>
                            <Card2 color={"card-one-5"} symbol={<TodayIcon/>} cardName={"Consumption (Per      Day)"}
                                   number={dashboard.consumption_per_day}/>
                        </div>

                        <div className='row row-2'>
                            <Card2 color={"card-one-5"} symbol={<PersonAddIcon/>} cardName={"Pending Request"}
                                   number={dashboard.corporate_requests.length}/>
                            <Card2 color={"card-one-4"} symbol={<QueryBuilderIcon/>} cardName={"Coupon Validity"}
                                   number={30}/>
                        </div>

                        <LoaderCon/>

                    </div>

                </div>

            </div>

        )
    }
}

export default withStyles(styles)(Dashboard);
