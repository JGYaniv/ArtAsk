import React from 'react'

const handleClick = () => alert("feature coming soon!")

export default () => (
    <div className="bannerImage">
        <div className="banner-cta">
            <h1>Artists volunteering their craft to build a better world</h1>
            <p>Our artist volunteers are mobilized and motivated to help you change the world. Lets work together!</p>
            <div className="explorer-cta">
                <form>
                    <input type="text" />
                    <input type="submit" value="Find a volunteer"/>
                </form>
            </div>
        </div>
    </div>
)