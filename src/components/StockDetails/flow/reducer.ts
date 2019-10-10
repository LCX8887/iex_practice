import { RECEIVE_STOCK_DETAILS, REQUEST_STOCK_DETAILS } from "./actionTypes";

import { Action } from "src/types";

const initialState = {
  stockDetails: {},
  isFetching: false
};

const StockDetailsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_STOCK_DETAILS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_STOCK_DETAILS:
      return {
        ...state,
        isFetching: false,
        stockDetails: action.payload
      };
    default:
      return state;
  }
};

export default StockDetailsReducer;
