import React, {Component} from "react";

import {connect} from "react-redux";
// import Dashboard from "../../components/dashboard/dashboard";
import StudentDash from "../../components/studentDashboard/StudentDash";
import { close_snack_bar} from "../../actions/snackbar/snackbar_action";

import {
    get_dashboard_data,
    get_total_users, get_total_consumption, get_consumption_per_day,
    get_consumption_per_month, view_corporate_requests, view_company_balance, view_users_consumption
} from '../../actions/dashboard/dashboardActions'

import {
    get_all_category, change_category
} from "../../actions/category/categoryActions"

import {
    delete_request
} from "../../actions/request/requestActions"

import {
    setLoader, unsetLoader
} from "../../actions/loader/loaderAction"

export class StudentDashboardContainer extends Component {
    render() {
        return (
            <StudentDash {...this.props} />
        );
    }
}

export const mapStateToProps = store => {
    return {
        // login: store.login,
        // loader: store.loader,
        // snackbar: store.snackbar,
        // dashboard: store.dashboard,
        // category: store.category,
    };
};
// export const mapDispatchToProps = dispatch => {
//     return {

//         close_snack_bar: () => {
//             dispatch(close_snack_bar());
//         },
//         setLoader: () => {
//             dispatch(setLoader());
//         },
//         unsetLoader: () => {
//             dispatch(unsetLoader());
//         },
//         get_all_category: (id) => {
//             dispatch(get_all_category(id));
//         },
//         change_category: (company_id, user_id, employeeId, user_name, new_category) => {
//             dispatch(change_category(company_id, user_id, employeeId, user_name, new_category));
//         },
//         get_total_users: (id) => {
//             dispatch(get_total_users(id));
//         },
//         delete_request: (id, cid) => {
//             dispatch(delete_request(id, cid));
//         },
//         get_total_consumption: (id) => {
//             dispatch(get_total_consumption(id));
//         },
//         get_consumption_per_month: (id) => {
//             dispatch(get_consumption_per_month(id));
//         },
//         get_consumption_per_day: (id) => {
//             dispatch(get_consumption_per_day(id));
//         },
//         view_company_balance: (id) => {
//             dispatch(view_company_balance(id));
//         },
//         view_corporate_requests: (id) => {
//             dispatch(view_corporate_requests(id));
//         },
//         get_dashboard_data: (id) => {
//             dispatch(get_dashboard_data(id));
//         },
//         view_users_consumption: (id) => {
//             dispatch(view_users_consumption(id));
//         },
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
export default connect(mapStateToProps)(StudentDashboardContainer);

