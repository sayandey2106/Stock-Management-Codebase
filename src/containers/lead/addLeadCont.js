import React, { Component } from "react";
import { connect } from "react-redux";
import Lead from "../../components/lead/addLead";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    // get_user_lead,
    add_lead
    // delete_user,
} from "../../actions/user/userActions";
export class CategoryCont extends Component {
    render() {
        return (
            <Lead {...this.props} />
        );
    }
}
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        user: store.user,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        add_lead: (name, email, phone, remark, user_id) => {
            dispatch(add_lead(name, email, phone, remark, user_id));
        },
        // add_users: (name,email,phone,password) => {
        //     dispatch(add_users(name,email,phone,password));
        // },
        
        // delete_user: (id) => {
        //     dispatch(delete_user(id));
        // },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryCont);
