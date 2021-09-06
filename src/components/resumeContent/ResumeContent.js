import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import About from './About'
import Education from './Education'
import Work from './WorkExperience'
import Other from './OtherExperience'
import Projects from './Projects'

function ResumeContent() {
    return (
        <Router>
            <About />
            <Education />
            <Work />
            <Other />
            <Projects />
        </Router>
    );
}

export default ResumeContent;