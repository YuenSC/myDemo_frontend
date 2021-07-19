import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Posts from "./components/posts";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Home} />
        </Switch>
        <div style={{ height: 1000 }} />
        <Footer />
        <div style={{ height: 50 }} />
      </div>
    </React.Fragment>
  );
}

export default App;
