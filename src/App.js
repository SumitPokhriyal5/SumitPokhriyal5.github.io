import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Github from './components/github/Github';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div className="App">
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
