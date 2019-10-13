import {
  RECEIVE_STOCK_DETAILS,
  REQUEST_STOCK_DETAILS,
  RECEIVE_CHART,
} from './actionTypes';

import { Action } from 'src/types';

const initialState = {
  quote: {},
  news: [],
  chart: [],
  isFetching: false,
};

const StockDetailsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_STOCK_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_STOCK_DETAILS:
      return {
        ...state,
        isFetching: false,
        quote: action.payload.quote,
        news: action.payload.news,
        chart: action.payload.chart,
      };
    case RECEIVE_CHART:
      return {
        ...state,
        chart: action.payload,
      };
    default:
      return state;
  }
};

export default StockDetailsReducer;
