import React from 'react';
import {FacebookSvg, InstagramSvg, LinkedInSvg,GithubSvg, SpotifySvg} from "../../icons/SvgIcons";
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="icon-container">
                <a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/son.nguyen.58173000/" ><FacebookSvg/></a>
                <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/son8235/"><InstagramSvg/></a>
                <a target="_blank"  rel="noopener noreferrer" href="https://open.spotify.com/user/music_muncher"><SpotifySvg/></a>
                <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/son-nguyen092/"><LinkedInSvg/></a>
                <a target="_blank"  rel="noopener noreferrer" href="https://github.com/sotrnguy92"><GithubSvg/></a>
            </div>
            <div className="copyright">
                &copy; Son Nguyen 2021
            </div>
        </div>
    )
}