import React from 'react';
import './Header.scss';
import {FaReact} from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]


const Header = () => {
    return (
        <div className='header'>
            <nav>
            <Link to={'/'}>
                <FaReact size={30}/>
            </Link>
            <ul>
                <NavLink exact to={'/'}><li>Home</li></NavLink>
                <NavLink exact to={'/education'}><li>Education</li></NavLink>
                <NavLink exact to={'/portfolio'}><li>Portfolio</li></NavLink>
            </ul>
            </nav>
        </div>
    )
}

export default Header;