import React, { Component } from "react";
import { connect } from "react-redux";
import Admin from "../../components/admin/admin";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_admin
} from "../../actions/admin/adminActions";
export class AdminCont extends Component {
    render() {
        return (
            <Admin {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        admin:store.admin,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_admin: (token) => {
            dispatch(get_all_admin(token));
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminCont);