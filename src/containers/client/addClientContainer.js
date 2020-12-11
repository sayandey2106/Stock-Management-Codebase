import React, { Component } from "react";
import { connect } from "react-redux";
import AddClient from "../../components/client/addClientComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_client,
    add_client,
    set_client_name,
    set_client_profile,
    set_client_email,
    set_client_contact_num,
    set_client_address,
    set_client_pan_num,
    set_client_aadhar_num,
    set_client_client_source

} from "../../actions/client/clientActions";

export class AddClientCont extends Component {
    render() {
        return (
            <AddClient {...this.props} />
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
        get_all_client: (token) => {
            dispatch(get_all_client(token));
        },
        add_client: (client,token,oid) => {
            dispatch(add_client(client,token,oid));
        },
        set_client_name: (token) => {
            dispatch(set_client_name(token));
        },
        set_client_email: (token) => {
            dispatch(set_client_email(token));
        },
        set_client_profile: (token) => {
            dispatch(set_client_profile(token));
        },
        set_client_contact_num: (token) => {
            dispatch(set_client_contact_num(token));
        },
        set_client_address: (token) => {
            dispatch(set_client_address(token));
        },
        set_client_pan_num: (token) => {
            dispatch(set_client_pan_num(token));
        },
        set_client_aadhar_num: (token) => {
            dispatch(set_client_aadhar_num(token));
        },
        set_client_source: (token) => {
            dispatch(set_client_client_source(token));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddClientCont);