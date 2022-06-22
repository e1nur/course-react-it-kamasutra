import React from 'react';
import NavbarStyle from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={NavbarStyle.nav}>
            <div className={NavbarStyle.item}>
                <a href={'/profile'}>Profile</a>
            </div>
            <div className={`${NavbarStyle.item} ${NavbarStyle.active}`}>
                <a href={'/dialogs'}>Messages</a>
            </div>
            <div className={NavbarStyle.item}>
                <a>News</a>
            </div>
            <div className={NavbarStyle.item}>
                <a>Music</a>
            </div>
            <div className={NavbarStyle.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;