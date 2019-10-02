import * as React from "react";
import { ConnectedSearchBar as SearchBar } from "src/components/SearchBar/index";
import { ConnectedMarketBriefing as MarketBriefing } from "src/components/MarketBriefing/index";
import { ConnectedMarketEarnings as MarketEarnings } from "src/components/MarketEarnings/index";
import { ConnectedSectorPerformance as SectorPerformance } from "src/components/SectorPerformance/index";
import { ConnectedLists as Lists } from "src/components/Lists/index";
import { ConnectedMajorIndex as MajorIndex } from "src/components/MajorIndex/index";

import logo from "src/styles/images/logo.png";
import "./Home.css";

export const Home = () => (
  <div className="main">
    <div className="banner">
      <div className="logo">
        <img src={logo} alt="Logo"></img>
      </div>
      <SearchBar />
    </div>
    <div className="sections">
      <MarketBriefing />
      <MarketEarnings />
      <SectorPerformance />
      <Lists />
      <MajorIndex />
    </div>
  </div>
);
