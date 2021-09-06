import React from "react"

const Projects = () => {
    return (
        <header>
            <div class = "content">
                <h2 class="rotateColor"> Projects </h2>
                <p>
                    <h3> Activity Decider Amazon Alexa Skill </h3>
                        My senior project in high school. I spent several months researching Alexa Skills 
                        and learning about how our voice is encoded and interpreted before going on to code my 
                        own skill in Python. It randomly pulls an activity from a series of dictionaries 
                        when invoked and replies back with that activity. I also wrote a 
                        <a href="https://docs.google.com/document/d/1mzMih_fTALBqf-PJeg5t31mxPpvH9n41RUF_D3mPWJc/edit" target='_blank' rel='noreferrer'> "how-to" </a> 
                        guide to explain my process making the skill, learning GitHub, Travis CI, and much more.
                        Click <a href="https://github.com/avasdowney/alexa-decision-maker" target='_blank' rel='noreferrer'> here </a> 
                        to see the code to my project!
                </p>
            </div>
        </header>
    )
}

export default Projects