import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constants";
import { getDataApi } from "../fetchAPIs/get";
import { addDataApi } from "../fetchAPIs/add";
import { deleteDataApi } from "../fetchAPIs/delete";
import { updataDataApi } from "../fetchAPIs/update";
import { paginationDataApi } from "../fetchAPIs/pagination";
import { searchPaginationDataApi } from "../fetchAPIs/searchPagination";

function* getApi() {
  try {
    const res = yield getDataApi();
    yield put({
      type: types.GET_ITEM_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_ITEM_FAILURE,
      payload: { errorMessage: error.message },
    });
  }
}

function* addApi(action) {
  try {
    yield addDataApi(action.payload);
    yield put({
      type: types.ADD_ITEM_SUCCESS,
    });
    yield put({
      type: types.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.ADD_ITEM_FAILURE,
      payload: { errorMessage: error.message },
    });
  }
}

function* deleteApi(action) {
  try {
    yield deleteDataApi(action.payload);
    yield put({
      type: types.DELETE_ITEM_SUCCESS,
    });
    yield put({
      type: types.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_ITEM_FAILURE,
      payload: { errorMessage: error.message },
    });
  }
}

function* updateApi(action) {
  try {
    yield updataDataApi(action.payload);
    yield put({
      type: types.UPDATE_ITEM_SUCCESS,
    });
    yield put({
      type: types.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ITEM_FAILURE,
      payload: { errorMessage: error.message },
    });
  }
}

function* paginationApi(action) {
  try {
    const activeData =  yield paginationDataApi(action.payload);
    yield put({
      type: types.PAGINATION_ITEM_SUCCESS,
      payload : {
        listData : activeData.data,
        totalPage : activeData.totalPage,
        activePage : activeData.actiPage
      }
    });
  } catch (error) {
    yield put({
      type: types.PAGINATION_ITEM_FAILURE,
      payload: { errorMessage: error.message },
    });
  }
}

function* searchPaginationApi(action) {
  try {
    const activeData =  yield searchPaginationDataApi(action.payload);
    yield put({
      type: types.SEARCH_PAGINATION_ITEM_SUCCESS,
      payload : {
        listData : activeData.data,
        totalPage : activeData.totalPage,
        activePage : activeData.actiPage,
        textSearch : activeData.textSearch
      }
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_PAGINATION_ITEM_FAILURE,
      payload: { errorMessage: error.message },
    });
  }
}

export const itemSaga = [
  takeEvery(types.GET_ITEM_REQUEST, getApi),
  takeEvery(types.ADD_ITEM_REQUEST, addApi),
  takeEvery(types.DELETE_ITEM_REQUEST, deleteApi),
  takeEvery(types.UPDATE_ITEM_REQUEST, updateApi),
  takeEvery(types.PAGINATION_ITEM_REQUEST, paginationApi),
  takeEvery(types.SEARCH_PAGINATION_ITEM_REQUEST, searchPaginationApi)

];
