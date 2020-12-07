import React, { Component } from "react";
import { connect } from "react-redux";
import Majorhead from "../../components/majorhead/majorheadComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_majorhead,
    delete_majorhead,
    update_majorhead,
    add_majorhead
} from "../../actions/majorhead/majorheadActions";
export class MajorheadContainer extends Component {
    render() {
        return (
            <Majorhead {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        majorhead:store.majorhead,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_majorhead: (token) => {
            dispatch(get_all_majorhead(token));
        },
        delete_majorhead: (id, token) => {
            dispatch(delete_majorhead(id, token));
        },
        update_majorhead: (id, name, token) => {
            dispatch(update_majorhead(id, name, token));
        },
        add_majorhead: (name, token) => {
            dispatch(add_majorhead(name, token));
        },


    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MajorheadContainer);