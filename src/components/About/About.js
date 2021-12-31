import React from 'react';
import './About.css'
import profilePic from '../../images/profile-pic.jpg'
export const About = () => {
    return (
        <div id='about' className='about-container'>
            <div className='hero-box'>
                <h1>
                    HI, I'M SON
                </h1>
                <h4>
                    Web Developer
                </h4>
                <div className='pic-container'>
                    <img className='profile-pic' src={profilePic} alt="profile"/>
                </div>

            </div>
            <div className='about-blurb'>
                <p>
                    I'm a web developer that works primarily in JavaScript using React and Node for the front-end and back-end. I'm always working on projects that allow me to improve my skills and learn new technologies. I aspire towards a career in web development that allows me to bring ideas to life for people to enjoy.
                </p>
                <p>
                    When I'm not looking at a screen you can find me hiking, climbing, playing badminton, or just hanging out with my husky.
                </p>
            </div>

        </div>
    )
}