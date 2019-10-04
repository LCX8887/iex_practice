import * as React from "react";
import { State } from "src/types";
import { connect } from "react-redux";
import { fetchWatchListDetails } from "../flow/actions";

export interface WatchListProps {
  myWatchList: Array<string>;
  fetchWatchListDetails: any;
}
export interface WatchListState {}
export class WatchList extends React.Component<WatchListProps, WatchListState> {
  constructor(props: WatchListProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchWatchListDetails(this.props.myWatchList.join());
  }
  render() {
    const { myWatchList } = this.props;
    return (
      <div>
        <ul>
          {myWatchList.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  myWatchList: state.global.myWatchList,
  myWatchListDetails: state.WatchListReducer.myWatchListDetails
});
const mapDispatchToProps = {
  fetchWatchListDetails
};
export const ConnectedWatchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
