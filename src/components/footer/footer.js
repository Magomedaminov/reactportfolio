import React from "react";

import './Footer.scss';

import github from '../../icons/github.png';
import linkedin from '../../icons/linkedin.png';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__icon">
                <a href="https://www.github.com/Magomedaminov" className="github"><img src={github} alt="github"/></a>
            </div>
            <div className="footer__icon">
                <a href="https://www.linkedin.com/in/magomedaminov/" className="linkedin"><img src={linkedin} alt="linkedin"/></a>
            </div>  
        </div>
    )
}

export default Footer;