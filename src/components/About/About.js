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

                <div className='pic-container'>
                    <img className='profile-pic' src={profilePic} alt="profile"/>
                </div>

            </div>
            <div className='about-blurb'>
                <p>
                    I'm a web developer working primarily in JavaScript using React and Node for the front-end and back-end. I'm always looking for new projects that allow me to grow my skills and learn new technologies. I aspire towards a career in web development that allows me to bring ideas to life for people to enjoy.                </p>
                <p>
                    When I'm not behind a screen you can find me hiking, climbing, playing badminton, or hanging with my husky.
                </p>
            </div>

        </div>
    )
}