import * as React from "react";
import { connect } from "react-redux";
import { fetchLists } from "../flow/actions";
import { State } from "src/types";

export interface ListsProps {
  fetchLists: any;
  gainers: Array<{}>;
  losers: Array<{}>;
  iexvolume: Array<{}>;
  iexpercent: Array<{}>;
}
export interface ListsState {}
export class Lists extends React.Component<ListsProps, ListsState> {
  constructor(props: ListsProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchLists("all");
  }
  render() {
    const { gainers, losers, iexvolume, iexpercent } = this.props;
    return (
      <div>
        <div>
          <p>Gainers</p>
        </div>
        <div>
          <p>Loses</p>
        </div>
        <div>
          <p>IEXVolume</p>
        </div>
        <div>
          <p>IEXPercent</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  gainers: state.ListsReducer.gainers,
  losers: state.ListsReducer.losers,
  iexvolume: state.ListsReducer.iexvolume,
  iexpercent: state.ListsReducer.iexpercent
});

const mapDispatchToProps = {
  fetchLists
};

export const ConnectedLists = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
