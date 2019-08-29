import * as React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Home } from './view/Home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
