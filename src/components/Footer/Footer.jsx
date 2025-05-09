import React from 'react';
import './Footer.css';
import 'remixicon/fonts/remixicon.css';


const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="Footer__content-left">
                    <ul className="Footer__content-list">
                        <li className="Footer__content-item">
                            <p>find me in:</p>
                        </li>
                        <li className="Footer__content-item">
                            <a href="https://www.instagram.com/35.mursel/">
                                <span>@</span> <i className="ri-instagram-fill"></i>
                            </a>
                        </li>
                        <li className="Footer__content-item">
                            <a href="https://www.linkedin.com/in/murselsen/">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Footer__content-right">
                    <ul className="Footer__content-list">
                        <li className="Footer__content-item">
                            <a href="https://github.com/murselsen">
                                <span>@murselsen</span> <i className="ri-github-fill"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;