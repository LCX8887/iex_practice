import * as React from "react";
import { State } from "src/types";
import { connect } from "react-redux";

export interface WatchListProps {}
export interface WatchListState {}
export class WatchList extends React.Component<WatchListProps, WatchListState> {
  constructor(props: WatchListProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>WatchList comming soon</div>;
  }
}
const mapStateToProps = (state: State) => ({});
const mapDispatchToProps = {};
export const ConnectedWatchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
