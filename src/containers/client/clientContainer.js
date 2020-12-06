import React, { Component } from "react";
import { connect } from "react-redux";
import Client from "../../components/client/clientComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_client,
    delete_client,
    update_client
} from "../../actions/client/clientActions";
export class ClientContainer extends Component {
    render() {
        return (
            <Client {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        client:store.client,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_client: (token,oid) => {
            dispatch(get_all_client(token,oid));
        },
        delete_client: (id, token, oid) => {
            dispatch(delete_client(id, token, oid));
        },
        update_client: (id, name, profile, email, password, position, department, employee_id, token, oid) => {
            dispatch(update_client(id, name, profile, email, password, position, department, employee_id, token, oid));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);