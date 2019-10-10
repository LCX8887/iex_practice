import { RECEIVE_STOCK_DETAILS, REQUEST_STOCK_DETAILS } from "./actionTypes";

import { Dispatch } from "redux";

export const requestStockDetails = () => ({
  type: REQUEST_STOCK_DETAILS
});

export const receiveStockDetails = (json: JSON) => ({
  type: RECEIVE_STOCK_DETAILS,
  payload: json
});

export const fetchStockDetails = (symbol: String) => (dispatch: Dispatch) => {
  dispatch(requestStockDetails());
  return fetch(
    "https://cloud.iexapis.com/stable/stock/" +
      symbol +
      "/batch?token=sk_75e757942e044e33aba43cbb07ba8e13&types=quote,news,chart&range=1m&last=10"
  )
    .then(response => response.json())
    .then(json => dispatch(receiveStockDetails(json)));
};
