import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSymbols } from 'src/components/SearchBar/flow/actions';
import { State } from 'src/types';

import { List } from 'antd';

export interface SearchBarProps {
  fetchSymbols: () => Promise<any>;
  symbols: Array<{
    name: string;
    symbol: string;
    date?: string;
    isEnabled?: boolean;
    type?: string;
    iexId?: string;
  }>;
}

export interface SearchBarState {
  searchText: string;
  hideList: boolean;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchText: '',
      hideList: true,
    };
  }
  componentDidMount = () => {
    this.props.fetchSymbols();
  };

  handleInputChange = (e: any) => {
    const { value } = e.target;
    value === ''
      ? this.setState(() => ({ hideList: true }))
      : this.setState(() => ({ hideList: false }));
    this.setState(() => ({ searchText: value }));
  };

  render() {
    const { symbols } = this.props;
    const { searchText, hideList } = this.state;

    return (
      <div>
        <input value={searchText} onChange={this.handleInputChange} />
        <List
          className={hideList ? 'hide' : ''}
          size="small"
          bordered
          dataSource={symbols.filter(
            (symbol) => symbol.name.indexOf(searchText) > -1
          )}
          renderItem={(symbol) => (
            <List.Item key={symbol.symbol}>
              {symbol.symbol}-{symbol.name}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  symbols: state.SearchBarReducer.symbols,
});

const mapDispatchToProps = {
  fetchSymbols,
};

export const ConnectedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
