import React, { Component } from "react";
import { connect } from "react-redux";
import Executive from "../../components/executive/executiveComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_executive,
    delete_executive,
    update_executive
} from "../../actions/executive/executiveActions";
export class ExecutiveContainer extends Component {
    render() {
        return (
            <Executive {...this.props} />
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
        get_all_executive: (token,oid) => {
            dispatch(get_all_executive(token,oid));
        },
        delete_executive: (id, token, oid) => {
            dispatch(delete_executive(id, token, oid));
        },
        update_executive: (id, name, profile, email, password, position, department, employee_id, token, oid) => {
            dispatch(update_executive(id, name, profile, email, password, position, department, employee_id, token, oid));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExecutiveContainer);