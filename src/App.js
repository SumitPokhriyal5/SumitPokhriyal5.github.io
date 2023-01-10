import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
// import {Navbar} from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
