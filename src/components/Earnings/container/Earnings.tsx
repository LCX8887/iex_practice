import * as React from 'react';

export interface EarningsProps {}

export interface EarningsState {}
export class Earnings extends React.Component<EarningsProps, EarningsState> {
  constructor(props: EarningsProps) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};
  render() {
    return <div />;
  }
}
