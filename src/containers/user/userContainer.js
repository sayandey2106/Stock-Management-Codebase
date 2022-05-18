import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../../components/user/userComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_users,
    add_users,
    get_today_user_lead
    // delete_user,
} from "../../actions/user/userActions";

export class CategoryCont extends Component {
    render() {
        return (
            <User {...this.props} />
        );
    }
}
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        user: store.user,
        lead:store.lead
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_user: (company_id) => {
            dispatch(get_all_users(company_id));
        },
        get_today_user_lead: (user_id) => {
            dispatch(get_today_user_lead(user_id));
        },
        add_users: (name,email,phone,password) => {
            dispatch(add_users(name,email,phone,password));
        },
        
        // delete_user: (id) => {
        //     dispatch(delete_user(id));
        // },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryCont);
