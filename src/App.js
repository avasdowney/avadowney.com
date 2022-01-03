import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/resumeContent/About';
import Education from './components/resumeContent/Education';
import WorkExperience from './components/resumeContent/WorkExperience';
import OtherExperience from './components/resumeContent/OtherExperience';
import Projects from './components/resumeContent/Projects';
import Contact from './components/resumeContent/Contact';

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
        <Route path='/education' component={Education} />
        <Route path='/work-experience' component={WorkExperience} />
        <Route path='/other-experience' component={OtherExperience} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}
  
export default App;