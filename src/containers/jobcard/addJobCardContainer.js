import React, { Component } from "react";
import { connect } from "react-redux";
import AddJobcard from "../../components/jobcard/addJobcardComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_jobcard,
    add_jobcard,
    set_jobcard_name,
    set_jobcard_client_id,
    set_jobcard_firm_id,
    set_jobcard_majorhead_id,
    set_jobcard_minorhead_id,

} from "../../actions/jobcard/jobcardActions";

export class AddJobcardCont extends Component {
    render() {
        return (
            <AddJobcard {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        jobcard:store.jobcard,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_jobcard: (token) => {
            dispatch(get_all_jobcard(token));
        },
        add_jobcard: (jobcard,token,oid) => {
            dispatch(add_jobcard(jobcard,token,oid));
        },
        set_jobcard_name: (token) => {
            dispatch(set_jobcard_name(token));
        },
        set_jobcard_client_id: (token) => {
            dispatch(set_jobcard_client_id(token));
        },
        set_jobcard_firm_id: (token) => {
            dispatch(set_jobcard_firm_id(token));
        },
        set_jobcard_majorhead_id: (token) => {
            dispatch(set_jobcard_majorhead_id(token));
        },
        set_jobcard_minorhead_id: (token) => {
            dispatch(set_jobcard_minorhead_id(token));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddJobcardCont);