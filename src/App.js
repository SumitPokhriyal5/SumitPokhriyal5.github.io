import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Github from './components/github/Github';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
// import {Navbar} from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Skills/>
      <Github/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
