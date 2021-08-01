import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import ImagesPage from "./components/imagesPage";
import NavBar from "./components/navbar";
import scrollLib from "./js/aos";

function App() {
  scrollLib.refresh();
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/images" component={ImagesPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
