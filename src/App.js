import React, { Component } from "react";
import PokeCalls from "./components/PokeCalls";
import SearchBar from "./components/SearchBar";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorMessage from "./components/ErrorMessage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeFilters: []
    };
  }

  handleFilters = typeFilters => {
    if (!typeFilters) {
      this.setState({ typeFilters: [] });
    }
    this.setState({ typeFilters: typeFilters });
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar />

          <SearchBar filter={this.handleFilters} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <PokeCalls filterList={this.state.typeFilters} />}
            />
            <Route exact path="/detail/:name" component={Detail} />
            <Route component={ErrorMessage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


