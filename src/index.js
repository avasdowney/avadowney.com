import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar'
import Home from './components/resumeContent/Home'
import ResumeContent from './components/resumeContent/ResumeContent'

import "./css/styles.css"

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);
