import React, { Component } from "react";
import { connect } from "react-redux";
import Jobcard from "../../components/jobcard/jobcardComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_jobcard,
    // delete_jobcard,
    update_jobcard
} from "../../actions/jobcard/jobcardActions";
import {
    get_all_client
} from "../../actions/client/clientActions"
import {
    get_all_majorhead
} from "../../actions/majorhead/majorheadActions"
import {
    get_all_minorhead
} from "../../actions/minorheads/minorheadActions"
export class JobcardContainer extends Component {
    render() {
        return (
            <Jobcard {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        jobcard:store.jobcard,
        client:store.client,
        majorhead:store.majorhead,
        minorhead:store.minorhead
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_jobcard: (token,oid) => {
            dispatch(get_all_jobcard(token,oid));
        },
        // delete_jobcard: (id, token, oid) => {
        //     dispatch(delete_jobcard(id, token, oid));
        // },
        update_jobcard: (id, client_id, firm_id, majorhead_id, minorhead_id, name, token, oid) => {
            dispatch(update_jobcard(id, client_id, firm_id, majorhead_id, minorhead_id, name, token, oid));
        },
        get_all_client: (token, oid) => {
            dispatch(get_all_client(token, oid));
        },
        get_all_majorhead: (token, oid) => {
            dispatch(get_all_majorhead(token, oid));
        },
        get_all_minorheadt: (token, oid) => {
            dispatch(get_all_minorhead(token, oid));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(JobcardContainer);