import React, { Component } from "react";
import { connect } from "react-redux";
import CheckList from "../../components/checkList/checkListComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_checkList,
    // delete_checkList,
    update_checkList
} from "../../actions/checkList/checkListActions";
import {
    get_all_majorhead
} from "../../actions/majorhead/majorheadActions"
import {
    get_all_minorhead
} from "../../actions/minorheads/minorheadActions"
import {
    get_all_client
} from "../../actions/client/clientActions"
export class CheckListContainer extends Component {
    render() {
        return (
            <CheckList {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        checkList:store.checkList,
        majorhead:store.majorhead,
        minorhead:store.minorhead,
        client:store.client
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_checkList: (token,oid) => {
            dispatch(get_all_checkList(token,oid));
        },
        // delete_checkList: (id, token, oid) => {
        //     dispatch(delete_checkList(id, token, oid));
        // },
        update_checkList: (id, client_id, firm_id, majorhead_id, minorhead_id, name, token, oid) => {
            dispatch(update_checkList(id, client_id, firm_id, majorhead_id, minorhead_id, name, token, oid));
        },
        get_all_majorhead: (token, oid) => {
            dispatch(get_all_majorhead(token, oid));
        },
        get_all_minorhead: (token, oid) => {
            dispatch(get_all_minorhead(token, oid));
        },
        get_all_client: (token, oid) => {
            dispatch(get_all_client(token, oid));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckListContainer);
