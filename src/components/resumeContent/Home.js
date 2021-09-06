import React from "react"

import headshot from '../../images/ava_face.png'

const imgStyle = {
    display: 'flex',
    width: '25%',
    margin: '0 auto'
};

const Home = () => {
    return (
        <header>
            <div class = "content">
                <h1 class="rotateColor"> Ava Downey </h1>
                <img src={headshot} alt="headshot" style={imgStyle} />
            </div>
        </header>
    )
}

export default Home