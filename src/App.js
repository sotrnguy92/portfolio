import React from "react";
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

    </div>
  );
};

export default App;
