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
                        <li><ReactSvg/> React</li>
                        <li> <Html5Svg/> HTML5 </li>
                        <li><Css3Svg/> CSS3</li>
                        <li><ReduxSvg/> Redux</li>
                        <li> <MuiSvg/> MUI</li>
                    </ul>
                </div>
                <div className='section-container'>
                    <h3>
                         Back-End
                    </h3>
                    <ul>
                        <li><JavaScriptSvg/> JavaScript</li>
                        <li> <NodeSvg/> Node </li>
                        <li> <MongoDbSvg/> MongoDB</li>
                        <li><MySqlSvg/> MySQL</li>
                        <li><PostgreSqlSvg/> PostgreSQL</li>
                    </ul>
                </div>
                <div className='section-container'>
                    <h3>
                        <ToolsSvg/> Tools
                    </h3>
                    <ul>
                        <li><GitBashSvg/> Git Bash</li>
                        <li> <GithubSvg/> Github </li>
                        <li> <PostmanSvg/> PostMan </li>
                        <li><ChromeSvg/> Chrome DevTools</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}