import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/content/About';
import Resume from './components/content/Resume';
import Projects from './components/content/Projects';
import Contact from './components/content/Contact';

function reload() {
  window.location.reload(false);
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} onClick={reload} />
        <Route path='/about' component={About} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}
  
export default App;