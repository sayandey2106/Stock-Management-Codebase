import React, {Component} from "react";

import {connect} from "react-redux";
import Dashboard from "../../components/dashboard/dashboard";
import { close_snack_bar} from "../../actions/snackbar/snackbar_action";

import { get_dashboard_data} from '../../actions/dashboard/dashboardActions'

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
        get_dashboard_data: (id) => {
            dispatch(get_dashboard_data(id));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
