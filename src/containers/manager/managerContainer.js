import React, { Component } from "react";
import { connect } from "react-redux";
import Manager from "../../components/manager/managerComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_manager,
    delete_manager,
    update_manager
} from "../../actions/manager/managerActions";
export class ManagerCont extends Component {
    render() {
        return (
            <Manager {...this.props} />
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
        get_all_manager: (token,oid) => {
            dispatch(get_all_manager(token,oid));
        },
        delete_manager: (id, token, oid) => {
            dispatch(delete_manager(id, token, oid));
        },
        update_manager: (id, name, profile, email, password, position, department, employee_id, token, oid) => {
            dispatch(update_manager(id, name, profile, email, password, position, department, employee_id, token, oid));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagerCont);