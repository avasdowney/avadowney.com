import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './components/navbar/Navbar'
import ResumeContent from './components/resumeContent/ResumeContent'

import "./css/styles.css"

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);
