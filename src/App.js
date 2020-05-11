import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <StoreProvider>
          <Switch>
            <Route exact path={["/", "/books"]}>
              <Saved />
            </Route>
            <Route exact path="/books/:id">
              <Search />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
