import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./global/global";
import { theme } from "./global/theme";

import Home from "./pages/Index";
import Cinema from "./pages/Cinema";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cinema" component={Cinema} />
            </Switch>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
