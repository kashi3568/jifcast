import React from 'react'
import classes from './Header.module.css';
import NavItem from './NavItem/NavItem';
import Nav1 from '../../asset/images/refresh.png';
import Nav2 from '../../asset/images/mic.png';
import Nav3 from '../../asset/images/Pathnav.png';
import Nav4 from '../../asset/images/Rectangle.png';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const Header = ({brandName , location}) => {
    let link1, link2, link3;
    if(location.pathname === '/link2'){
        link1 = 'https://www.facebook.com';
        link2 = 'https://www.instagram.com';
        link3 = 'https://www.twitter.com';
    }
    else{
        link1 = 'https://www.google.com';
        link2 = 'https://www.yahoo.com';
        link3 = 'https://www.amazon.com';
    }
    return (
        <div className={classes.header}>
            <NavLink to="/link2"><div className={classes.brandLogo}>{brandName}</div></NavLink>
            <div className = {classes.navItems}>
                <a href={link1}><NavItem imgSrc={Nav1} text="refresh" /></a>
                <a href={link2}><NavItem imgSrc={Nav2} text="discover" /></a>
                <a href={link3}><NavItem imgSrc={Nav3} text="notification" /></a>
                <NavItem imgSrc={Nav4} text="username" />
            </div>
        </div>
    )
}

export default withRouter(Header);
