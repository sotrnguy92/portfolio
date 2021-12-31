import React from 'react'
import './NavBar.css'
import { Link } from "react-scroll";

export const NavBar = () =>{

    return (
        <div className="navbar">
            <Link activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration= {700}
                  className="letter-logo">SON NGUYEN</Link>
            <div className="nav-menu">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                >ABOUT</Link>

                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}>SKILLS</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>PROJECTS</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>CONTACT</Link>
            </div>

        </div>
    )
}
