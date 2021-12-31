import React from 'react';
import {PaperPlaneSvg} from "../../icons/SvgIcons";
import './Contact.css'
export const Contact = () => {
    return (

        <div className="contact-container contact">
            <PaperPlaneSvg/>
            <h1>GET IN TOUCH</h1>
            <body className='contact-body'>
            Want to work on a project together or just nerd out? <br/> Shoot me an email and let's make it happen!
            </body>
            <button className="contact-button" onClick={()=>{window.location.href=`mailto:sonnguyen092@gmail.com`}}>Say Hi</button>
        </div>
    )
}