import * as React from "react";
import { ConnectedSearchBar as SearchBar } from "src/components/SearchBar/index";
import { ConnectedMarketBriefing as MarketBriefing } from "src/components/MarketBriefing/index";
import { ConnectedMarketEarnings as MarketEarnings } from "src/components/MarketEarnings/index";
import { ConnectedSectorPerformance as SectorPerformance } from "src/components/SectorPerformance/index";

export const Home = () => (
  <div>
    <SearchBar />
    <MarketBriefing />
    <MarketEarnings />
    <SectorPerformance />
  </div>
);
