import React from 'react';
import './Skills.css'
import {
    ChromeSvg,
    Css3Svg, GitBashSvg, GithubSvg,
    Html5Svg,
    JavaScriptSvg,
    MongoDbSvg,
    MuiSvg,
    MySqlSvg,
    NodeSvg, PostgreSqlSvg, PostmanSvg,
    ReactSvg,
    ReduxSvg, ToolsSvg
} from "../../icons/SvgIcons";
export const Skills = () => {
    return(
        <div className='skills-container' id='skills'>
            <h1 className='skills-header'>
                Skills
            </h1>
            <div className="columns-container">
                <div className='section-container'>
                    <h3>
                        Front-End
                    </h3>
                    <ul>
                        <li><ReactSvg/> &nbsp; React</li>
                        <li> <Html5Svg/> &nbsp; HTML5 </li>
                        <li><Css3Svg/> &nbsp; CSS3</li>
                        <li><ReduxSvg/> &nbsp; Redux</li>
                        <li> <MuiSvg/> &nbsp; MUI</li>
                    </ul>
                </div>
                <div className='section-container'>
                    <h3>
                         Back-End
                    </h3>
                    <ul>
                        <li><JavaScriptSvg/> &nbsp; JavaScript</li>
                        <li> <NodeSvg/> &nbsp; Node </li>
                        <li> <MongoDbSvg/> &nbsp; MongoDB</li>
                        <li><MySqlSvg/> &nbsp; MySQL</li>
                        <li><PostgreSqlSvg/> &nbsp; PostgreSQL</li>
                    </ul>
                </div>
                <div className='section-container'>
                    <h3>
                         Tools
                    </h3>
                    <ul>
                        <li><GitBashSvg/> &nbsp; Git Bash</li>
                        <li> <GithubSvg/> &nbsp; Github </li>
                        <li> <PostmanSvg/> &nbsp; PostMan </li>
                        <li><ChromeSvg/> &nbsp; Chrome DevTools</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}