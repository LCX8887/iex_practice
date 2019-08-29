import {
  RECEIVE_MARKET_BRIEFING,
  REQUEST_MARKET_BRIEFING,
} from './actionTypes';
import { Dispatch } from 'redux';
import { getUrl } from 'src/utilities/getUrl';

export const requestMarketBriefing = () => ({
  type: REQUEST_MARKET_BRIEFING,
});

export const receiveMarketBriefing = (json: JSON) => ({
  type: RECEIVE_MARKET_BRIEFING,
  payload: json,
});

export const fetchMostActive = () => (dispatch: Dispatch) => {
  dispatch(requestMarketBriefing());
  return fetch(getUrl('/stable/stock/market/list/mostactive'))
    .then((response) => response.json())
    .then((json) => dispatch(receiveMarketBriefing(json)));
};
