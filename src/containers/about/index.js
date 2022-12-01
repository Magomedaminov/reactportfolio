import React from "react";

import './styles.scss';

import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const personalDetails = [
    {
        label: 'Name',
        value: 'Denis Magomedaminov'
    },
    {
        label: 'Age',
        value: '36'
    },
    {
        label: 'Address',
        value: 'Russia'
    },
    {
        label: 'Email',
        value: 'm.denis053@gmail.com'
    },
    {
        label: 'Contact No',
        value: '+79516666020'
    }
];

const jobSammary = `I'm Frontend developer with 6 months experience. 
My general stack is: React.JS JavaScript
Also i have knowledge in back-end (PHP, Node.JS).`;

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText = "About me"
                icon ={<BsInfoCircleFill size={40}/>}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSammary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3 className="personalInfoHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <DiApple size={60} color='var(--yellow-theme-main-color)'/>
                            </div>
                            <div>
                                <DiAndroid size={60} color='var(--yellow-theme-main-color)'/>
                            </div>
                            <div>
                                <FaDev size={60} color='var(--yellow-theme-main-color)'/>
                            </div>
                            <div>
                                <FaDatabase size={60} color='var(--yellow-theme-main-color)'/>
                            </div>
                        </div>
                    </Animate>
                </div>
                
            </div>

        </section>
    )
}

export default About;