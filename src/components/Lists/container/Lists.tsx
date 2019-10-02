import * as React from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import {
  fetchGainers,
  fetchLosers,
  fetchIEXVolume,
  fetchIEXPercent
} from "../flow/actions";
import { State } from "src/types";

export interface ListsProps {
  fetchGainers: any;
  fetchLosers: any;
  fetchIEXVolume: any;
  fetchIEXPercent: any;
  gainers: Array<{}>;
  losers: Array<{}>;
  iexVolume: Array<{}>;
  iexPercent: Array<{}>;
}
export interface ListsState {}
const columns = [
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "symbol"
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName"
  },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume"
  },
  {
    title: "Price",
    dataIndex: "latestPrice",
    key: "latestPrice"
  }
];
export class Lists extends React.Component<ListsProps, ListsState> {
  constructor(props: ListsProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchGainers();
    this.props.fetchLosers();
    this.props.fetchIEXVolume();
    this.props.fetchIEXPercent();
  }
  render() {
    const { gainers, losers, iexVolume, iexPercent } = this.props;
    return (
      <div>
        <div>
          <div className="section-title">
            <p>Gainers</p>
          </div>
          <Table columns={columns} dataSource={gainers} />
        </div>
        <div>
          <div className="section-title">
            <p>Losers</p>
          </div>
          <Table columns={columns} dataSource={losers} />
        </div>
        <div>
          <div className="section-title">
            <p>IEXVolume</p>
          </div>

          <Table columns={columns} dataSource={iexVolume} />
        </div>
        <div>
          <div className="section-title">
            <p>IEXPercent</p>
          </div>
          <Table columns={columns} dataSource={iexPercent} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  gainers: state.ListsReducer.gainers,
  losers: state.ListsReducer.losers,
  iexVolume: state.ListsReducer.iexVolume,
  iexPercent: state.ListsReducer.iexPercent
});

const mapDispatchToProps = {
  fetchGainers,
  fetchLosers,
  fetchIEXVolume,
  fetchIEXPercent
};

export const ConnectedLists = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
