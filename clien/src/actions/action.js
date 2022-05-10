import * as types from "../constants";

export function getListItem() {
  return {
    type: types.GET_ITEM_REQUEST,
  };
}
export function addListItem(payload) {
  return {
    type: types.ADD_ITEM_REQUEST,
    payload,
  };
}

export function deleteListItem(payload) {
  return {
    type: types.DELETE_ITEM_REQUEST,
    payload,
  };
}

export function updateListItem(payload) {
  return {
    type: types.UPDATE_ITEM_REQUEST,
    payload,
  };
}

export function paginationListItem(payload) {
  return {
    type: types.PAGINATION_ITEM_REQUEST,
    payload,
  };
}

export function searchPaginationListItem(payload) {
  return {
    type: types.SEARCH_PAGINATION_ITEM_REQUEST,
    payload,
  };
}
