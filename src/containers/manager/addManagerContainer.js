import React, { Component } from "react";
import { connect } from "react-redux";
import AddManager from "../../components/manager/addManagerComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_manager,
    add_manager,
    set_all_manager,
    set_manager_name,
    set_manager_profile,
    set_manager_email,
    set_manager_password,
    set_manager_position,
    set_manager_department,
    set_manager_employee_id

} from "../../actions/manager/managerActions";

export class AddManagerCont extends Component {
    render() {
        return (
            <AddManager {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        manager:store.manager,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_manager: (token) => {
            dispatch(get_all_manager(token));
        },
        add_manager: (manager,token,oid) => {
            dispatch(add_manager(manager,token,oid));
        },
        set_manager_name: (token) => {
            dispatch(set_manager_name(token));
        },
        set_manager_email: (token) => {
            dispatch(set_manager_email(token));
        },
        set_manager_profile: (token) => {
            dispatch(set_manager_profile(token));
        },
        set_manager_password: (token) => {
            dispatch(set_manager_password(token));
        },
        set_manager_position: (token) => {
            dispatch(set_manager_position(token));
        },
        set_manager_department: (token) => {
            dispatch(set_manager_department(token));
        },
        set_manager_employee_id: (token) => {
            dispatch(set_manager_employee_id(token));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddManagerCont);