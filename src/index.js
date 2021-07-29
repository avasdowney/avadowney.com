import React from 'react'
import ReactDOM from 'react-dom'

import Home from './resumeContent/Home'
import About from './resumeContent/About'
import Education from './resumeContent/Education'
import Work from './resumeContent/WorkExperience'
import Other from './resumeContent/OtherExperience'
import Projects from './resumeContent/Projects'
import Contact from './resumeContent/Contact'

import "./css/styles.css"


ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Education />
    <Work />
    <Other />
    <Projects />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
