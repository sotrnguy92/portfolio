import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {About} from './components/About/About'
import {WhatIDo} from './components/WhatIDo/WhatIDo'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <About/>
        <WhatIDo/>
        <div style={{marginTop:"100vh"}}> intro to site </div>
        <div> Projects</div>
        <div> Technologies</div>
        <div> Contact </div>
        <div>footer</div>
    </div>
  );
};

export default App;
