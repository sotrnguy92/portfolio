import React from 'react';
import './About.css'
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
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="profile"/>
                </div>

            </div>
            <div className='about-blurb'>
                <p>
                    I'm a web developer that works primarily in JavaScript using React and Node for the front-end and back-end. I'm always working on projects that allow me to improve my skills and learn new technologies. I aspire towards a career that allows me to bring ideas to life on the web for people to enjoy.
                </p>
                <p>
                    When I'm not on my computer you can find me hiking, climbing, playing badminton, or just hanging out with my husky.
                </p>
            </div>

        </div>
    )
}