import React, { Component } from "react";
import { connect } from "react-redux";
import Firm from "../../components/firm/firmComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_firm,
    delete_firm,
    update_firm
} from "../../actions/firm/firmActions";
import {
    get_all_client,
} from "../../actions/client/clientActions"
export class FirmContainer extends Component {
    render() {
        return (
            <Firm {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        firm:store.firm,
        client:store.client,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_firm: (token,oid) => {
            dispatch(get_all_firm(token,oid));
        },
        get_all_client: (token,oid) => {
            dispatch(get_all_client(token,oid));
        },
        delete_firm: (id, token, oid) => {
            dispatch(delete_firm(id, token, oid));
        },
        update_firm: (id, client_id, type, reg, gst, din, pt, pf_esi, iec, ddo, token, oid) => {
            dispatch(update_firm(id, client_id, type, reg, gst, din, pt, pf_esi, iec, ddo, token, oid));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FirmContainer);
