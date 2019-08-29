import {
  REQUEST_SECTOR_PERFORMANCE,
  RECEIVE_SECTOR_PERFORMANCE,
} from './actionTypes';
import { Dispatch } from 'redux';
import { getUrl } from 'src/utilities/getUrl';

export const requestSectorPerformance = () => ({
  type: REQUEST_SECTOR_PERFORMANCE,
});

export const receiveSectorPerformance = (json: JSON) => ({
  type: RECEIVE_SECTOR_PERFORMANCE,
  payload: json,
});

export const fetchSectorPerformance = () => (dispatch: Dispatch) => {
  dispatch(requestSectorPerformance());
  return fetch(getUrl('/stock/market/sector-performance'))
    .then((response) => response.json())
    .then((json) => dispatch(receiveSectorPerformance(json)));
};
