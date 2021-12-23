import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {About} from './components/About/About'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <div style={{marginTop:"100vh"}}> intro to site </div>
        <About/>
        <div> Projects</div>
        <div> Technologies</div>
        <div> Contact </div>
        <div>footer</div>
    </div>
  );
};

export default App;
