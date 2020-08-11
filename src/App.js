import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./global/global";
import { theme } from "./global/theme";

import Home from "./pages/Index";
import Details from "./pages/Details";
import ResultPage from "./pages/ResultSearch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movie/:id" component={Details} />
              <Route path="/search/:slug" component={ResultPage} />
            </Switch>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
