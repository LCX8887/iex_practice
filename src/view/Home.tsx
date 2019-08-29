import * as React from 'react';
import { ConnectedSearchBar as SearchBar } from 'src/components/SearchBar/index';
import { ConnectedMarketBriefing as MarketBriefing } from 'src/components/MarketBriefing/index';
export const Home = () => (
  <div>
    home
    <SearchBar />
    <MarketBriefing />
  </div>
);
