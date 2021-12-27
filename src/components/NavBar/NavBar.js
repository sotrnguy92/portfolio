import React from 'react'
import './NavBar.css'
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () =>{

    return (
        <div className="navbar">
            <a href={"#"} className="letter-logo">SON NGUYEN</a>
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
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>EXPERIENCE</Link>
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
