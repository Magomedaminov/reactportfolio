import React from "react";

import './styles.scss';

import myImage from '../../image/myImage.png';

const Home = () => {
    return (
        <div className="home container">
            <div className="home__about">
                <h1>Hi, I'm Denis
                <br/>
                Front end developer 
                </h1>
                {/* <button>Let’s get started</button> */}
            </div>
            <div className="home__image"><img src={myImage} alt="myImage" className="my-image"/></div>
        </div>
    )
}

export default Home;