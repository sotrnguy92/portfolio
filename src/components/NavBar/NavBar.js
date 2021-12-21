import React from 'react'
import './NavBar.css'

export const NavBar = () =>{
    return (
        <div className="navbar">
            <a href={"#"} className="letter-logo">SON NGUYEN</a>
            <div className="nav-menu">
                <div>ABOUT</div>
                <div>PROJECTS</div>
                <div>EXPERIENCE</div>
                <div>CONTACT</div>
            </div>
        </div>
    )
}
