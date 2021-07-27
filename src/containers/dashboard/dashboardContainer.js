import React, {Component} from "react";

import {connect} from "react-redux";
import Dashboard from "../../components/dashboard/dashboard";
import { close_snack_bar} from "../../actions/snackbar/snackbar_action";

import {
    get_dashboard_data,
    get_total_users, get_total_consumption, get_consumption_per_day,
    get_consumption_per_month, view_corporate_requests, view_company_balance, view_users_consumption
} from '../../actions/dashboard/dashboardActions'

export class DashboardContainer extends Component {
    render() {
        return (
            <Dashboard {...this.props} />
        );
    }
}

export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        dashboard: store.dashboard,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_total_users: (id) => {
            dispatch(get_total_users(id));
        },
        get_total_consumption: (id) => {
            dispatch(get_total_consumption(id));
        },
        get_consumption_per_month: (id) => {
            dispatch(get_consumption_per_month(id));
        },
        get_consumption_per_day: (id) => {
            dispatch(get_consumption_per_day(id));
        },
        view_company_balance: (id) => {
            dispatch(view_company_balance(id));
        },
        view_corporate_requests: (id) => {
            dispatch(view_corporate_requests(id));
        },
        get_dashboard_data: (id) => {
            dispatch(get_dashboard_data(id));
        },
        view_users_consumption: (id) => {
            dispatch(view_users_consumption(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
