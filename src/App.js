import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Posts from "./components/posts";
import Contact from "./components/contact";
import scrollLib from "./js/aos";

function App() {
  scrollLib.refresh();
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
