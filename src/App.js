import './App.css';
import {NavBar} from './components/NavBar/NavBar'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <div style={{marginTop:"100vh"}}> intro to site </div>
        <div>about me</div>
        <div> Projects</div>
        <div> Technologies</div>
        <div> Contact </div>
        <div>footer</div>
    </div>
  );
};

export default App;
