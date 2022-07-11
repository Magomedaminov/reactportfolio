import React from "react";
import './home.scss'

function Home () {
    return (
        <div className="home container">
            <div className="home__about">
                <h1>Hi,I am Denis</h1>
                <p>
                Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                {/* <button>Let’s get started</button> */}
            </div>
            <div className="home__img"></div>
        </div>
    )
}

export default Home;