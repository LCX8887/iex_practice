export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  SearchBarReducer: { symbols: Array<{}>; isFetching: boolean };
  MarketBriefingReducer: { mostActive: Array<{}>; isFetching: boolean };
}
