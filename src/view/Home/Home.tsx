import * as React from 'react';

import { ConnectedMarketBriefing as MarketBriefing } from 'src/components/MarketBriefing/index';
import { ConnectedMarketEarnings as MarketEarnings } from 'src/components/MarketEarnings/index';
import { ConnectedSectorPerformance as SectorPerformance } from 'src/components/SectorPerformance/index';
import { ConnectedLists as Lists } from 'src/components/Lists/index';
import { ConnectedMajorIndex as MajorIndex } from 'src/components/MajorIndex/index';
import { ConnectedWatchList as WatchList } from 'src/components/WatchList/index';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

import './Home.css';

export const Home = () => (
  <div className="main">
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
