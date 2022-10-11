import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss';



const Home = () => {

    const navigate = useNavigate();

    const handleNavToContactPage = () => {
        navigate("/contact")
    }

    return (
        <div className="home">
            <div className="home__wrapper">
                <div className="home__about">
                    <h1>Hi, I'm Denis
                    <br/>
                        Front end developer 
                    </h1>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateY(400px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <button onClick={handleNavToContactPage}>Let’s get started</button>
                    </Animate>
                </div>
                {/* <div className="home__image"><img src={myImage} alt="myImage" className="my-image"/></div> */}
            </div>
        </div>
        
    )
}

export default Home;