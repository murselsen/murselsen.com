import React, { useState } from 'react'
import './Header.css'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleNavbarMenuToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }
    return (

        <nav className="Navbar">
            <div className="Navbar__header">
                <div className="Navbar__header-logo">
                    <a href="/" className="logo-title">mursel-sen</a>
                </div>
                <div className="Navbar__header-toggle">
                    <button className="navbar-toggle" id="navbar-toggle" onClick={handleNavbarMenuToggle}>
                        {
                            isNavbarOpen ? <i className="ri-close-line" id="navbar-toggle-icon"></i> : <i className="ri-menu-line" id="navbar-toggle-icon"></i>
                        }
                    </button>
                </div>
            </div>
            <div className={isNavbarOpen ? "Navbar__content active" : "Navbar__content"} id="navbar-menu">
                <p className="Navbar__content-title"># navigate:</p>
                <ul className="Navbar__content-list">
                    <MenuItem type="menu" title="_home" link="/" />
                    <MenuItem type="menu" title="_about_mee" link="about" />
                    <MenuItem type="menu" title="_projects" link="project" />
                    <MenuItem type="menu" title="_contact_me" link="contact-me" />
                    <li className="Navbar__content-item lang"><a href="#"> <img src="./images/icon/lg_enUS.png" width="25"
                        alt="english" /> <span>_EN-US</span></a></li>
                </ul>
            </div>
        </nav>

    )
}

const MenuItem = ({ title, link }) => {
    return (
        <li className="Navbar__content-item"><a href={link}>{title}</a></li>
    )
}


export default Header;