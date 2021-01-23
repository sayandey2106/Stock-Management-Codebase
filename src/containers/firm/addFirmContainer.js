import React, { Component } from "react";
import { connect } from "react-redux";
import AddFirm from "../../components/firm/addFirmComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_firm,
    add_firm,
    set_firm_name,
    set_firm_type,
    set_firm_reg,
    set_firm_gst,
    set_firm_din,
    set_firm_pt,
    set_firm_pf_esi,
    set_firm_iec,
    set_firm_ddo,
    set_firm_client_id

} from "../../actions/firm/firmActions";
import {
    get_all_client

} from '../../actions/client/clientActions'
import {
    get_all_majorhead
} from "../../actions/majorhead/majorheadActions";
import {get_all_minorhead,view_majorheads_minorhead} from "../../actions/minorheads/minorheadActions";

export class AddFirmCont extends Component {
    render() {
        return (
            <AddFirm {...this.props} />
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
        majorhead:store.majorhead,
        minorhead:store.minorhead,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_firm: (token) => {
            dispatch(get_all_firm(token));
        },
        get_all_client: (token,oid) => {
            dispatch(get_all_client(token,oid));
        },
        get_all_majorhead: (token,oid) => {
            dispatch(get_all_majorhead(token,oid));
        },
        get_all_minorhead: (token,oid) => {
            dispatch(get_all_minorhead(token,oid));
        },
        view_majorheads_minorhead: (id, token) => {
            dispatch(view_majorheads_minorhead(id, token));
        },
        add_firm: (firm,token,oid) => {
            dispatch(add_firm(firm,token,oid));
        },
        set_firm_name: (token) => {
            dispatch(set_firm_name(token));
        },
        set_firm_type: (token) => {
            dispatch(set_firm_type(token));
        },
        set_firm_reg: (token) => {
            dispatch(set_firm_reg(token));
        },
        set_firm_gst: (token) => {
            dispatch(set_firm_gst(token));
        },
        set_firm_din: (token) => {
            dispatch(set_firm_din(token));
        },
        set_firm_pt: (token) => {
            dispatch(set_firm_pt(token));
        },
        set_firm_pf_esi: (token) => {
            dispatch(set_firm_pf_esi(token));
        },
        set_firm_iec: (token) => {
            dispatch(set_firm_iec(token));
        },
        set_firm_ddo: (token) => {
            dispatch(set_firm_ddo(token));
        },
        set_firm_client_id: (token) => {
            dispatch(set_firm_client_id(token));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddFirmCont);
