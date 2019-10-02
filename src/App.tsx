import * as React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Home, SymbolDetails } from "./view/index";
import { Layout } from "antd";
import { Route, Switch, HashRouter } from "react-router-dom";
const { Header, Footer, Content } = Layout;

class App extends React.Component {
  public render() {
    const header = <div></div>;
    const content = (
      <Switch>
        <Route exact path="/stocks/:selectedSymbol" component={SymbolDetails} />
        {/* <Route exact path="/sectors/:selectedSector" component={Sectors} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
    );
    const footer = (
      <div>
        <p>
          Data provided for free by
          <a target="_blank" href="https://iextrading.com/developer/">
            IEX
          </a>
          . View
          <a target="_blank" href="https://iextrading.com/api-exhibit-a/">
            IEX’s Terms of Use
          </a>
          .
        </p>
      </div>
    );

    return (
      <HashRouter>
        <Layout className="App">
          <Header className="AppHeader">{header}</Header>
          <Content className="AppContent">{content}</Content>
          <Footer className="AppFooter">{footer}</Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
