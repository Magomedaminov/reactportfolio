import React from "react";

import './Home.scss';

import myImage from '../../image/myImage.png';

const Home = () => {
    return (
        <div className="home container">
            <div className="home__about">
                <h1>Hi,I am Denis</h1>
                <p>
                Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                {/* <button>Let’s get started</button> */}
            </div>
            <img src={myImage} alt="myImage" className="my-image"/>
        </div>
    )
}

export default Home;