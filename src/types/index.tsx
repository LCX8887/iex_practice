export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  SearchBarReducer: { symbols: Array<{}>; isFetching: boolean };
  MarketBriefingReducer: {
    mostActive: { mostActiveStock: Array<{}> };
    isFetching: boolean;
  };
  MarketEarningsReducer: { marketEarnings: Array<{}>; isFetching: boolean };
  SectorPerformanceReducer: {
    sectorPerformance: Array<{}>;
    isFetching: boolean;
  };
  ListsReducer: {
    losers: Array<{}>;
    iexVolume: Array<{}>;
    iexPercent: Array<{}>;
    gainers: Array<{}>;
    isFetching: boolean;
  };
  MajorIndexReducer: {
    majorIndex: { majorIndexesList: Array<{}> };
    isFetching: boolean;
  };
}
