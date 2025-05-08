import React from 'react'
import './Header.css'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
    return (

        <nav class="Navbar">
            <div class="Navbar__header">
                <div class="Navbar__header-logo">
                    <a href="/" class="logo-title">mursel-sen</a>
                </div>
                <div class="Navbar__header-toggle">
                    <button class="navbar-toggle" id="navbar-toggle">
                        <i class="ri-menu-line" id="navbar-toggle-icon"></i>
                    </button>
                </div>
            </div>
            <div class="Navbar__content" id="navbar-menu">
                <p class="Navbar__content-title"># navigate:</p>
                <ul class="Navbar__content-list">
                    <MenuItem type="menu" title="_home" link="/" />
                    <MenuItem type="menu" title="_about_mee" link="about" />
                    <MenuItem type="menu" title="_projects" link="project" />
                    <MenuItem type="menu" title="_contact_me" link="contact-me" />
                    <li class="Navbar__content-item lang"><a href="#"> <img src="./images/icon/lg_enUS.png" width="25"
                        alt="english" /> <span>_EN-US</span></a></li>
                </ul>
            </div>
        </nav>

    )
}

const MenuItem = ({ title, link }) => {
    return (
        <li class="Navbar__content-item"><a href={link}>{title}</a></li>
    )
}


export default Header;