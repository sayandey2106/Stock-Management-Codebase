import React, { Component } from "react";
import { connect } from "react-redux";
import Request from "../../components/request/requestComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_request,
    delete_request,
    update_request,
    add_request,
    approve_corporate_request, disapprove_corporate_request
} from "../../actions/request/requestActions";
import {
    get_all_category
} from "../../actions/category/categoryActions"

export class RequestCont extends Component {
    render() {
        return (
            <Request {...this.props} />
        );
    }
}
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        request:store.request,
        category:store.category,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_request: (token) => {
            dispatch(get_all_request(token));
        },
        get_all_category: (token) => {
            dispatch(get_all_category(token));
        },
        delete_request: (id) => {
            dispatch(delete_request(id));
        },
        update_request: (id, name, quantity) => {
            dispatch(update_request(id, name, quantity));
        },
        add_request: (name, quantity) => {
            dispatch(add_request(name, quantity));
        },
        approve_corporate_request:(user_id, company_id, category_id, e_id) => {
            dispatch(approve_corporate_request(user_id, company_id, category_id, e_id))
        },
        disapprove_corporate_request:(user_id , company_id) => {
            dispatch(disapprove_corporate_request(user_id, company_id))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RequestCont);
