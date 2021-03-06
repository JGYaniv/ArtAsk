import React from 'react'
export default () => (
    <div className="footer">
        <div className="footer-header">
            <p>Reach me on social media: </p>
            <span className="social-links">
                <a href="https://www.linkedin.com/in/jonathan-gil-yaniv-79a6776a/">LinkedIn</a> |
                {/* <a href="#">AngelsList</a> | */}
                <a href="https://github.com/JGYaniv/">GitHub</a> |
                <a href="https://twitter.com/jgyaniv">Twitter</a>
            </span>
        </div>
        <div className="cols">
            <div className="left-col">
                <ul className="footer-menu">
                    <li><p>Contact</p></li>
                    <li><a href="https://jgyaniv.github.io">Portfolio Website</a></li>
                    <li><a href="mailto:jgyaniv@gmail.com">jgyaniv@gmail.com</a></li>
                    <li><a href="#">(551)265-5763</a></li>
                </ul>
            </div>
            <div className="mid-col">
                <ul className="footer-menu">
                    <li><p>A Task Tabbit Clone</p></li>
                    <li><a href="https://taskrabbit.com">taskrabbit.com</a></li>
                </ul>
            </div>
            <div className="right-col">
                <ul className="footer-menu">
                    <li><p>About</p></li>
                    <li><p className="about">
                        ArtAsk is a thought exercise in how 
                        to effectively offer pro bono creative services to 
                        nonprofits.The UI and layout is a clone of
                        Task Rabbit, but the messaging and the 
                        community is entirely different.
                    </p></li>
                </ul>
            </div>
        </div>
    </div>
)