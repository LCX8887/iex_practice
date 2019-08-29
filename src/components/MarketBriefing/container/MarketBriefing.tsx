import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMostActive } from '../flow/actions';
import { State } from 'src/types';

export interface MarketBriefingProps {
  fetchMostActive: any;
  mostActive: Array<{
    symbol: string;
    companyName: string;
    open: number;
    close: number;
    changePercent: number;
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
  render() {
    const { mostActive } = this.props;
    return (
      <div>
        <p>mostActive</p>
        {mostActive.map((item) => {
          const changePercent = (item.changePercent * 100).toFixed(2) + '%';
          return (
            <div key={item.symbol}>
              <div>
                <p>{item.symbol}</p>
                <p>{item.companyName}</p>
              </div>
              <div>
                <p>{item.close}</p>
                <p>{changePercent}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  mostActive: state.MarketBriefingReducer.mostActive,
});

const mapDispatchToProps = {
  fetchMostActive,
};

export const ConnectedMarketBriefing = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketBriefing);
