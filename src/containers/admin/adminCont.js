import React, { Component } from "react";
import { connect } from "react-redux";
import Admin from "../../components/admin/admin";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_admin,
    delete_admin,
    update_admin
} from "../../actions/admin/adminActions";
export class AdminCont extends Component {
    render() {
        return (
            <Admin {...this.props} />
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
        get_all_admin: (token,oid) => {
            dispatch(get_all_admin(token,oid));
        },
        delete_admin: (id, token, oid) => {
            dispatch(delete_admin(id, token, oid));
        },
        update_admin: (id, name, profile, email, password, position, department, employee_id, token, oid) => {
            dispatch(update_admin(id, name, profile, email, password, position, department, employee_id, token, oid));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminCont);