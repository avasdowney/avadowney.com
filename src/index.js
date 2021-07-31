import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Home from './components/resumeContent/Home'
import About from './components/resumeContent/About'
import Education from './components/resumeContent/Education'
import Work from './components/resumeContent/WorkExperience'
import Other from './components/resumeContent/OtherExperience'
import Projects from './components/resumeContent/Projects'
import Contact from './components/resumeContent/Contact'

import "./css/styles.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
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
