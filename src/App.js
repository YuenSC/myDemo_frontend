import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Posts from "./components/posts";
import Contact from "./components/contact";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
        <div style={{ height: 1000 }} />
        <Footer />
        <div style={{ height: 50 }} />
      </div>
    </React.Fragment>
  );
}

export default App;
