import {
  RECEIVE_LISTS_GAINERS,
  REQUEST_LISTS_GAINERS,
  RECEIVE_LISTS_LOSERS,
  REQUEST_LISTS_LOSERS,
  RECEIVE_LISTS_IEXVOLUME,
  REQUEST_LISTS_IEXVOLUME,
  RECEIVE_LISTS_IEXPERCENT,
  REQUEST_LISTS_IEXPERCENT
} from "./actionTypes";

import { Dispatch } from "redux";
import { getUrl } from "src/utilities/getUrl";

export const requestGainers = () => ({
  type: REQUEST_LISTS_GAINERS
});

export const receiveGainers = (json: JSON) => ({
  type: RECEIVE_LISTS_GAINERS,
  payload: json
});

export const requestLosers = () => ({
  type: REQUEST_LISTS_LOSERS
});

export const receiveLosers = (json: JSON) => ({
  type: RECEIVE_LISTS_LOSERS,
  payload: json
});
export const requestIEXVolume = () => ({
  type: REQUEST_LISTS_LOSERS
});

export const receiveIEXVolume = (json: JSON) => ({
  type: RECEIVE_LISTS_IEXVOLUME,
  payload: json
});
export const requestIEXPercent = () => ({
  type: REQUEST_LISTS_IEXPERCENT
});

export const receivIEXPercent = (json: JSON) => ({
  type: RECEIVE_LISTS_IEXPERCENT,
  payload: json
});
export const fetchLists = () => (dispatch: Dispatch) => {
  dispatch(requestMarketBriefing());
  return fetch(getUrl("/stable/stock/market/list/mostactive"))
    .then(response => response.json())
    .then(json => dispatch(receiveMarketBriefing(json)));
};
