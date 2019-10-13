import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/types';
import { fetchStockDetails, fetchChart } from '../flow/actions';
import { addWatchList, deleteWatchList } from 'src/store/global/actions';
import { StockHeader, StockChart } from '../component/index';

// interface SyntheticEvent {
//   bubbles: boolean;
//   cancelable: boolean;
//   currentTarget: EventTarget;
//   defaultPrevented: boolean;
//   eventPhase: number;
//   isTrusted: boolean;
//   nativeEvent: Event;
//   preventDefault(): void;
//   stopPropagation(): void;
//   target: EventTarget;
//   timeStamp: Date;
//   type: string;
// }
interface EventTarget {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
}
export interface QuoteType {
  symbol: string;
  change: number;
  changePercent: number;
  extendedChange: number;
  extendedChangePercent: number;
  companyName: string;
  close: number;
  latestTime: number;
  extendedPrice: number;
  previousClose: number;
  iexRealtimePrice: number;
  latestPrice?: number;
}
export interface ChartType {
  date: string;
  open: number;
  close: number;
  high: number;
  low: number;
}

export interface StockDetailsProps {
  fetchStockDetails: (props: string) => {};
  selectedSymbol: string;
  myWatchList: Array<string>;
  addWatchList: any;
  deleteWatchList: any;
  fetchChart: any;
  quote: QuoteType;
  chart: Array<ChartType>;
  news: Array<{}>;
}

export interface StockDetailsState {
  chartRange: Array<string>;
  selectedRange: string;
}
export class StockDetails extends React.Component<
  StockDetailsProps,
  StockDetailsState
> {
  constructor(props: StockDetailsProps) {
    super(props);
    this.state = {
      chartRange: ['1D', '1M', '3M', '6M', 'YTD', '1Y', '2Y', '5Y'],
      selectedRange: '1D',
    };
  }
  componentDidMount = () => {
    this.props.fetchStockDetails(this.props.selectedSymbol);
  };
  handleChangeWatchList = (symbol: string) => {
    if (this.props.myWatchList.indexOf(symbol) == -1) {
      this.props.addWatchList(symbol);
    } else {
      this.props.deleteWatchList(symbol);
    }
  };
  handleChartChange = (e: React.SyntheticEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    this.setState({
      selectedRange: target.value,
    });
    this.props.fetchChart(this.props.selectedSymbol, target.value);
  };
  render() {
    const { quote, myWatchList, chart } = this.props;
    return (
      <div>
        <StockHeader
          quote={quote}
          watchList={myWatchList}
          handleChangeWatchList={this.handleChangeWatchList}
        />
        <StockChart
          selectedRange={this.state.selectedRange}
          chartData={chart}
          chartRange={this.state.chartRange}
          handleChartChange={this.handleChartChange}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  quote: state.StockDetailsReducer.quote,
  chart: state.StockDetailsReducer.chart,
  news: state.StockDetailsReducer.news,
  myWatchList: state.global.myWatchList,
});

const mapDispatchToProps = {
  fetchStockDetails,
  addWatchList,
  deleteWatchList,
  fetchChart,
};

export const ConnectedStockDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetails);
