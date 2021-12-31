import React from 'react';
import './VerticalEmail.css'
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            width: 100,
            marginLeft: 30,
            border:0
        }}
    />
);

export const VerticalEmail = () => {
    return(
        <div className="email">
            <div className="email-link" onClick={()=>{window.location.href=`mailto:sonnguyen092@gmail.com`}}>
            sonnguyen092@gmail.com
            </div>
            <ColoredLine color="#4D8AB5" />
        </div>

    )
}