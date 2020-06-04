import React from 'react'
export default () => (
    <div className="footer">
        <div className="footer-header">
            <p>Reach me on social media: </p>
            <span className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">AngelsList</a>
                <a href="#">GitHub</a>
            </span>
        </div>
        <div className="cols">
            <div className="left-col">
                <ul className="footer-menu">
                    <li><p>Contact</p></li>
                    <li><a href="jgyaniv.github.io">Portfolio Website</a></li>
                    <li><a href="mailto:jgyaniv@gmail.com">jgyaniv@gmail.com</a></li>
                    <li><a href="#">(551)265-5763</a></li>
                </ul>
            </div>
            <div className="mid-col">
                <ul className="footer-menu">
                    <li><p>A Task Tabbit Clone</p></li>
                    <li><a href="taskrabbit.com">taskrabbit.com</a></li>
                </ul>
            </div>
            <div className="right-col">
                <ul className="footer-menu">
                    <li><p>About</p></li>
                    <li><p>
                        ArtAsk is also a thought exercise in how <br />
                        to effectively offer in-kind donations to <br />
                        nonprofits.The UI and layout is a clone of <br/>
                        Task Rabbit, but the messaging and the <br />
                        community is entirely different.<br />
                    </p></li>
                </ul>
            </div>
        </div>
    </div>
)