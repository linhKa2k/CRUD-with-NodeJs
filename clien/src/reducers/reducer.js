import * as types from "../constants";
const DEFAULT_STATE = {
  listData: [],
  isFetching: false,
  dataFetched: false,
  error: false,
  errorMessage: null,

  activePage: null,
  totalPage: null,
  textSearch: "",
};
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        listData: action.payload,
      };
    case types.GET_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.ADD_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
      };
    case types.ADD_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
      };
    case types.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.DELETE_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
      };
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
      };
    case types.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.UPDATE_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
      };
    case types.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
      };
    case types.UPDATE_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.PAGINATION_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
      };
    case types.PAGINATION_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        listData: action.payload.listData,
        activePage: action.payload.activePage,
        totalPage: action.payload.totalPage,
      };
    case types.PAGINATION_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.SEARCH_PAGINATION_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
      };
    case types.SEARCH_PAGINATION_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        listData: action.payload.listData,
        activePage: action.payload.activePage,
        totalPage: action.payload.totalPage,
        textSearch: action.payload.textSearch,
      };
    case types.SEARCH_PAGINATION_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
