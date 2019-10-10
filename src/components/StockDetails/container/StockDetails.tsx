import * as React from "react";
import { connect } from "react-redux";
import { State } from "src/types";
import { fetchStockDetails } from "../flow/actions";
import {
  CustomizePeers,
  PeersTable,
  StockChart,
  StockHeader,
  StockHeaderBoard,
  StockPeers,
  StockProfile
} from "../component/index";

export interface StockDetailsProps {
  fetchStockDetails: (props: string) => {};
  selectedSymbol: string;
}

export interface StockDetailsState {}
export class StockDetails extends React.Component<
  StockDetailsProps,
  StockDetailsState
> {
  constructor(props: StockDetailsProps) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.fetchStockDetails(this.props.selectedSymbol);
  };
  render() {
    const { selectedSymbol } = this.props;
    return (
      <div>
        <div className="section-title">
          <p>Stock Details {selectedSymbol}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  stockDetails: state.StockDetailsReducer.stockDetails
});

const mapDispatchToProps = {
  fetchStockDetails
};

export const ConnectedStockDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetails);
