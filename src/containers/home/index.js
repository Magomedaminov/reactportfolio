import React from "react";
// import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { SiGithub, SiCodewars, SiLinkedin} from "react-icons/si";



const Home = () => {
    const socialData = [
        {
            image: SiGithub,
            link: "https://github.com/Magomedaminov",
        },
        {
            image: SiLinkedin,
            link: "https://www.linkedin.com/in/magomedaminov/",
        },
        {
            image: SiCodewars,
            link: "https://www.codewars.com/users/MagomedaminovD",
        },
        // {
        //     image: SiUdemy,
        //     link: "https://www.udemy.com/user/denis-magomedaminov/",
        // }
    ];

    // const navigate = useNavigate();

    // const handleNavToContactPage = () => {
    //     navigate("/contact")
    // }

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
                        <div className="home__about__social">
                            {
                                socialData.map((item, i) => (
                                    <a key={i} href={item.link} target="_blank" rel="noreferrer">
                                        {<item.image size={50}/>}
                                    </a>
                                ))
                            }
                        </div>
                        
                        {/* <button onClick={handleNavToContactPage}>Let’s get started</button> */}
                    </Animate>
                </div>
                {/* <div className="home__image"><img src={myImage} alt="myImage" className="my-image"/></div> */}
            </div>
        </div>
        
    )
}

export default Home;