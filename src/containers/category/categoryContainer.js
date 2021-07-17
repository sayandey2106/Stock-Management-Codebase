import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "../../components/category/categoryComponents";
import { close_snack_bar } from "../../actions/snackbar/snackbar_action";
import {
  get_all_category,
  delete_category,
  update_category,
  add_category,
} from "../../actions/category/categoryActions";

export class CategoryCont extends Component {
  render() {
    return <Category {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    category: store.category,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    get_all_category: (id) => {
      dispatch(get_all_category(id));
    },
    delete_category: (id) => {
      dispatch(delete_category(id));
    },
    update_category: (id, name, quantity) => {
      dispatch(update_category(id, name, quantity));
    },
    add_category: (name, quantity, company_id) => {
      dispatch(add_category(name, quantity, company_id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryCont);
