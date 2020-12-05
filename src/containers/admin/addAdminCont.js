import React, { Component } from "react";
import { connect } from "react-redux";
import AddAdmin from "../../components/admin/addAdmin";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_admin,
    add_admin,
    set_all_admin,
    set_admin_name,
    set_admin_profile,
    set_admin_email,
    set_admin_password,
    set_admin_position,
    set_admin_department,
    set_admin_employee_id

} from "../../actions/admin/adminActions";

export class AddAdminCont extends Component {
    render() {
        return (
            <AddAdmin {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        admin:store.admin,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_admin: (token) => {
            dispatch(get_all_admin(token));
        },
        add_admin: (admin,token,oid) => {
            dispatch(add_admin(admin,token,oid));
        },
        set_admin_name: (token) => {
            dispatch(set_admin_name(token));
        },
        set_admin_email: (token) => {
            dispatch(set_admin_email(token));
        },
        set_admin_profile: (token) => {
            dispatch(set_admin_profile(token));
        },
        set_admin_password: (token) => {
            dispatch(set_admin_password(token));
        },
        set_admin_position: (token) => {
            dispatch(set_admin_position(token));
        },
        set_admin_department: (token) => {
            dispatch(set_admin_department(token));
        },
        set_admin_employee_id: (token) => {
            dispatch(set_admin_employee_id(token));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAdminCont);