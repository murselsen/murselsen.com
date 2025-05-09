import React from 'react';

const HomeContent = () => {
    return (
        <>
            <div className="content">
                <div className="content__introduction">
                    <p className="message">Hi all. I am
                    </p>
                    <h1 className="username">Mürsel Şen</h1>
                    <p className="mission">Junior Full Stack Feveloper</p>
                </div>
                <div className="content__link">
                    <p className="message">// find my profile on Github:</p>
                    <p className="code"> <span className="constant">const</span><span className="variable">github</span> <span>=</span> <a
                        href="https://github.com/murselsen" target="_blank" className="value">"https://github.com/murselsen"</a>
                    </p>
                    <p className="message">// my personal Social Media profiles:</p>
                    <p className="code">
                        <span className="constant">const</span>
                        <span className="variable">instagram</span> <span>=</span>
                        <a href="https://www.instagram.com/35.mursel/" target="_blank"
                            className="value">"https://instagram.com/35.mursel/"</a>
                    </p>
                    <p className="code">
                        <span className="constant">const</span>
                        <span className="variable">linkedin</span> <span>=</span>
                        <a href="https://www.linkedin.com/in/murselsen/" target="_blank"
                            className="value">"https://linkedin.com/in/murselsen/"</a>
                    </p>
                </div>
            </div>
        </>
    )
}
export default HomeContent;