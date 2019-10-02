import * as React from "react";
import { connect } from "react-redux";
import { State } from "src/types";

export interface StockDetailsProps {
  fetchStockDetails: any;
  StockDetails: Array<{
    sector: string;
    changesPercentage: string;
  }>;
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
  //   componentDidMount = () => {
  //     this.props.fetchStockDetails();
  //   };
  render() {
    //const { StockDetails } = this.props;
    return (
      <div>
        <div className="section-title">
          <p>Stock Details</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  //StockDetails: state.StockDetailsReducer.StockDetails
});

const mapDispatchToProps = {
  //fetchStockDetails
};

export const ConnectedStockDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetails);
