import React, {Component} from 'react';
import './dashboard.css';

import Card1 from './card1';
import Card2 from './card2';
import Table from './Table'

import EqualizerIcon from '@material-ui/icons/Equalizer';
import TodayIcon from '@material-ui/icons/Today';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {styles} from "../../styles/style";
import withStyles from "@material-ui/core/styles/withStyles";
import {view_users_consumption} from "../../actions/dashboard/dashboardActions";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.get_total_users(this.props.login.company_id)
        this.props.get_total_consumption(this.props.login.company_id)
        this.props.get_consumption_per_day(this.props.login.company_id)
        this.props.get_consumption_per_month(this.props.login.company_id)
        this.props.view_corporate_requests(this.props.login.company_id)
        this.props.view_company_balance(this.props.login.company_id)
        this.props.view_users_consumption(this.props.login.company_id)
    }

    render() {
        const {
            dashboard,
        } = this.props;
        console.log("dashboard data aaaai", dashboard)
        return (

            <div className="dashboard">

                <div className="dashboard-heading">
                    <h2>QUBI7 ADMIN DASHBOARD</h2>
                </div>

                <div className="dashboard-container">

                    <div className="container-1">

                        <div className="cards">
                            <Card1 color={"card-one-1"} number={dashboard.total_consumption} cardName={"Total Consumption"}/>
                            <Card1 color={"card-one-2"} number={dashboard.company_balance} cardName={"Total Due"}/>
                            <Card1 color={"card-one-3"} number={dashboard.total_users.length} cardName={"Total Users"}/>
                        </div>


                        <div className="table"><Table data={dashboard.users_consumption}/></div>

                    </div>

                    <div className="container-2">

                        <div className='row'>
                            <Card2 color={"card-one-4"} symbol={<EqualizerIcon/>} cardName={"Consumption/Month"}
                                   number={dashboard.consumption_per_month}/>
                            <Card2 color={"card-one-5"} symbol={<TodayIcon/>} cardName={"Consumption/Day"}
                                   number={dashboard.consumption_per_day}/>
                        </div>

                        <div className='row row-2'>
                            <Card2 color={"card-one-5"} symbol={<PersonAddIcon/>} cardName={"Pending Request"}
                                   number={dashboard.corporate_requests.length}/>
                            <Card2 color={"card-one-4"} symbol={<QueryBuilderIcon/>} cardName={"Coupon Validity"}
                                   number={30}/>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);
