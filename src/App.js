import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Github from './components/github/Github';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <Github/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
