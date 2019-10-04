import * as React from 'react';
import { State } from 'src/types';
import { connect } from 'react-redux';

export interface WatchListProps {
  myWatchList: Array<string>;
}
export interface WatchListState {}
export class WatchList extends React.Component<WatchListProps, WatchListState> {
  constructor(props: WatchListProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { myWatchList } = this.props;
    return (
      <div>
        <ul>
          {myWatchList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  myWatchList: state.global.myWatchList,
});
const mapDispatchToProps = {};
export const ConnectedWatchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
