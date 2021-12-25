import React from 'react'
import './NavBar.css'

export const NavBar = () =>{
    return (
        <div className="navbar">
            <a href={"#"} className="letter-logo">SON NGUYEN</a>
            <div className="nav-menu">
                <a>ABOUT</a>
                <a>PROJECTS</a>
                <a>EXPERIENCE</a>
                <a>CONTACT</a>
            </div>
        </div>
    )
}
