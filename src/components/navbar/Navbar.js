import React from "react";

import Navbar from ".";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../resumeContent/Home'
import Contact from '../resumeContent/Contact'
import ResumeContent from "../resumeContent/ResumeContent";

function Navigationbar() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/resume" exact component={ResumeContent} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Navigationbar;