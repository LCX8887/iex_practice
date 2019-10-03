import * as React from "react";
import { connect } from "react-redux";
import { fetchMostActive } from "../flow/actions";
import { State } from "src/types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export interface MarketBriefingProps {
  fetchMostActive: any;
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
    mostActiveStock: []
  };
  render() {
    const { mostActiveStock } = this.props;
    return (
      <div className="market_briefing">
        <div className="section-title">
          <p>Market Briefing</p>
        </div>
        {mostActiveStock.map(item => {
          return (
            <Link rel={item.ticker} to={`/stocks/${item.ticker}`}>
              <div key={item.ticker} className="briefing-block">
                <FontAwesomeIcon icon={faStar} />
                <div className="briefing-name">
                  <p>{item.ticker}</p>
                  <p>{item.companyName}</p>
                </div>
                <div className="briefing-performance">
                  <p>{item.price}</p>
                  <p>{item.changesPercentage}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  mostActiveStock: state.MarketBriefingReducer.mostActive.mostActiveStock
});

const mapDispatchToProps = {
  fetchMostActive
};

// MarketBriefing.defaultProps = {
//   mostActiveStock: []
// };
export const ConnectedMarketBriefing = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketBriefing);
