import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import About from './About'
import Education from './Education'
import Resume from './Resume'
import Contact from './Contact'

function Content() {
    return (
        <Router>
            <About />
            <Education />
            <Resume />
            <Contact />
        </Router>
    );
}

export default Content;