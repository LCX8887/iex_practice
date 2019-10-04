import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMostActive } from '../flow/actions';
import { State } from 'src/types';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { addWatchList } from 'src/store/global/actions';

export interface MarketBriefingProps {
  fetchMostActive: any;
  addWatchList: any;
  mostActiveStock: Array<{
    ticker: string;
    changes: string;
    price: string;
    changesPercentage: string;
    companyName: string;
  }>;
}
export interface MarketBriefingState {}

export class MarketBriefing extends React.Component<
  MarketBriefingProps,
  MarketBriefingState
> {
  constructor(props: MarketBriefingProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchMostActive();
  }
  static defaultProps = {
    mostActiveStock: [],
  };
  handleChangeWatchList = (symbol: string) => {
    this.props.addWatchList(symbol);
  };
  render() {
    const { mostActiveStock } = this.props;
    return (
      <div className="market_briefing">
        <div className="section-title">
          <p>Market Briefing</p>
        </div>
        {mostActiveStock.map((item) => {
          return (
            <div key={item.ticker} className="briefing-block">
              <div onClick={() => this.handleChangeWatchList(item.ticker)}>
                <Icon type="star" theme="outlined" />
              </div>

              <Link rel={item.ticker} to={`/stocks/${item.ticker}`}>
                <div className="briefing-name">
                  <p>{item.ticker}</p>
                  <p>{item.companyName}</p>
                </div>
              </Link>
              <div className="briefing-performance">
                <p>{item.price}</p>
                <p>{item.changesPercentage}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  mostActiveStock: state.MarketBriefingReducer.mostActive.mostActiveStock,
});

const mapDispatchToProps = {
  fetchMostActive,
  addWatchList,
};

export const ConnectedMarketBriefing = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketBriefing);
