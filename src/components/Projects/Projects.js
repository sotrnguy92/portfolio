import React from 'react';
import './Projects.css'

export const Projects = () => {
    return (
        <div className="projects">
                <h1>Projects</h1>
            <div className="project-container">
                <div className='card badminton-buddy'>
                    <div className="card-content">
                        <h2 className="card-title"> Badminton Buddy</h2>
                        <p className="card-body">
                            An app made to assist in managing a badminton team. Built with React, Node, Redux, and MongoDB
                        </p>
                        <a target="_blank"  href="https://badminton-buddy.web.app/" className="button"> Visit Site</a>
                    </div>
                </div>

                <div className='card chype' >
                    <div className="card-content">
                        <h2 className="card-title"> Chype</h2>
                        <p className="card-body">
                            A messenger app with transliteration. Built with React, Express, MongoDb, and Socket.io
                        </p>
                        <a target="_blank"  href="https://chype.herokuapp.com/" className="button"> Visit Site</a>
                    </div>
                </div>

                <div className='card todo-app'>
                    <div className="card-content">
                        <h2 className="card-title"> Todo App</h2>
                        <p className="card-body">
                            A simple todo app that allows you to track tasks. Built with React, MySQL, and Node.
                        </p>
                        <a target="_blank"  href="https://son-todo-app2020.herokuapp.com/#/" target="_blank"  className="button"> Visit Site</a>
                    </div>
                </div>

                <div className='card note-taker'>
                    <div className="card-content">
                        <h2 className="card-title"> Note Taker</h2>
                        <p className="card-body">
                            An app that allows you to manage notes. Built with HTML, CSS, and express.js
                        </p>
                        <a target="_blank"  href="https://thawing-oasis-39840.herokuapp.com/" className="button"> Visit Site</a>
                    </div>
                </div>
                <div className='card dine-outside'>
                    <div className="card-content">
                        <h2 className="card-title"> Dine Outside</h2>
                        <p className="card-body">
                            A restaurant search engine that displays weather conditions in the area and outside seating availability.
                        </p>
                        <a target="_blank"  href="https://sotrnguy92.github.io/dineOutside/" className="button"> Visit Site</a>
                    </div>
                </div>
                <div className='card tinder-clone'>
                    <div className="card-content">
                        <h2 className="card-title"> Tinder Clone</h2>
                        <p className="card-body">
                            A simple Tinder clone made with React, Node, and MongoDB.
                        </p>
                        <a target="_blank"  href="https://tinder-clone-4c593.web.app/" className="button"> Visit Site</a>
                    </div>
                </div>
            </div>
        </div>

    )
}