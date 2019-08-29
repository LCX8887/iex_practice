import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'src/types';

export interface SectorPerformanceProps {}

export interface SectorPerformanceState {}

export class SectorPerformance extends React.Component<
  SectorPerformanceProps,
  SectorPerformanceState
> {
  constructor(props: SectorPerformanceProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = {};

export const ConnectedSectorPerformance = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectorPerformance);
