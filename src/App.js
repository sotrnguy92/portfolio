import React, {useRef} from "react";
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {About} from './components/About/About'
import {Skills} from './components/Skills/Skills'
import {Projects} from './components/Projects/Projects'
function App() {

    return (
    <div className="App">
        <NavBar/>
        <About />
        <Skills/>
        <Projects/>
        <div style={{marginTop:"100vh"}}> intro to site </div>
        <div> Projects</div>
        <div> Technologies</div>
        <div> Contact </div>
        <div>footer</div>
    </div>
  );
};

export default App;
