import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Contact from "./components/contact";
import Images from "./components/common/images";
import scrollLib from "./js/aos";

function App() {
  scrollLib.refresh();
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/images" component={Images} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
