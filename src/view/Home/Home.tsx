import * as React from 'react';
import { ConnectedSearchBar as SearchBar } from 'src/components/SearchBar/index';
import { ConnectedMarketBriefing as MarketBriefing } from 'src/components/MarketBriefing/index';
import { ConnectedMarketEarnings as MarketEarnings } from 'src/components/MarketEarnings/index';
import { ConnectedSectorPerformance as SectorPerformance } from 'src/components/SectorPerformance/index';
import { ConnectedLists as Lists } from 'src/components/Lists/index';
import { ConnectedMajorIndex as MajorIndex } from 'src/components/MajorIndex/index';
import { ConnectedWatchList as WatchList } from 'src/components/WatchList/index';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

import logo from 'src/styles/images/logo.png';
import './Home.css';

export const Home = () => (
  <div className="main">
    <div className="banner">
      <div className="logo">
        <img src={logo} alt="Logo"></img>
      </div>
      <SearchBar />
    </div>
    <Layout className="home_layout">
      <Content className="sections">
        <MarketBriefing />
        <MajorIndex />
        <MarketEarnings />
        <SectorPerformance />
        <Lists />
      </Content>
      <Sider className="home_sider" width="25%">
        <WatchList />
      </Sider>
    </Layout>
  </div>
);
