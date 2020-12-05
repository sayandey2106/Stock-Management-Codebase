import React, { Component } from "react";
import { connect } from "react-redux";
import AddExecutive from "../../components/executive/addExecutiveComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_executive,
    add_executive,
    set_all_executive,
    set_executive_name,
    set_executive_profile,
    set_executive_email,
    set_executive_password,
    set_executive_position,
    set_executive_department,
    set_executive_employee_id

} from "../../actions/executive/executiveActions";

export class AddExecutiveCont extends Component {
    render() {
        return (
            <AddExecutive {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        executive:store.executive,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_executive: (token) => {
            dispatch(get_all_executive(token));
        },
        add_executive: (executive,token,oid) => {
            dispatch(add_executive(executive,token,oid));
        },
        set_executive_name: (token) => {
            dispatch(set_executive_name(token));
        },
        set_executive_email: (token) => {
            dispatch(set_executive_email(token));
        },
        set_executive_profile: (token) => {
            dispatch(set_executive_profile(token));
        },
        set_executive_password: (token) => {
            dispatch(set_executive_password(token));
        },
        set_executive_position: (token) => {
            dispatch(set_executive_position(token));
        },
        set_executive_department: (token) => {
            dispatch(set_executive_department(token));
        },
        set_executive_employee_id: (token) => {
            dispatch(set_executive_employee_id(token));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddExecutiveCont);