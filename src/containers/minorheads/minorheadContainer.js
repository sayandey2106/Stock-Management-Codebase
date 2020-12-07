import React, { Component } from "react";
import { connect } from "react-redux";
import Minorhead from "../../components/minorheads/minorheadComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_minorhead,
    delete_minorhead,
    update_minorhead,
    add_minorhead
} from "../../actions/minorheads/minorheadActions";
import {
    get_all_majorhead
} from '../../actions/majorhead/majorheadActions'

export class MinorheadContainer extends Component {
    render() {
        return (
            <Minorhead {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        minorhead:store.minorhead,
        majorhead:store.majorhead
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_minorhead: (token) => {
            dispatch(get_all_minorhead(token));
        },
        delete_minorhead: (id, token) => {
            dispatch(delete_minorhead(id, token));
        },
        update_minorhead: (id, name, mid, token) => {
            dispatch(update_minorhead(id, name, mid, token));
        },
        add_minorhead: (name, mid, token) => {
            dispatch(add_minorhead(name, mid, token));
        },
        get_all_majorhead: (token) => {
            dispatch(get_all_majorhead(token));
        },


    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MinorheadContainer);