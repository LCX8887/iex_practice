import { RECEIVE_SYMBOLS, REQUEST_SYMBOLS } from './actionTypes';
import { Dispatch } from 'redux';
//import { Action } from 'src/types/index';
import { getUrl } from 'src/utilities/getUrl';

export const requestSymbols = () => ({
  type: REQUEST_SYMBOLS,
});

export const receiveSymbols = (json: JSON) => ({
  type: RECEIVE_SYMBOLS,
  payload: json,
});

export const fetchSymbols = () => (dispatch: Dispatch) => {
  dispatch(requestSymbols());
  return fetch(getUrl('v1/ref-data/symbols'))
    .then((response) => response.json())
    .then((json) => dispatch(receiveSymbols(json)));
};
