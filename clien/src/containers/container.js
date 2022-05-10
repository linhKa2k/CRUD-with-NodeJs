import React from "react";
import * as actions from "../actions/action";
import Item from "../components/component";
import { connect } from "react-redux";

class ItemContainer extends React.Component {
  componentDidMount() {
    this.props.paginationData({activePage : 1});
  }

  render() {
    return <Item {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    listData: state.itemReducer.listData,
    activePage: state.itemReducer.activePage,
    totalPage: state.itemReducer.totalPage,
    textSearch: state.itemReducer.textSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initLoad: () => {
      dispatch(actions.getListItem());
    },
    addData: (data) => {
      dispatch(actions.addListItem(data));
    },
    deleteData: (data) => {
      dispatch(actions.deleteListItem(data));
    },
    updateData: (data) => {
      dispatch(actions.updateListItem(data));
    },
    paginationData: (data) => {
      dispatch(actions.paginationListItem(data));
    },
    searchPaginationData: (data) => {
      dispatch(actions.searchPaginationListItem(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
