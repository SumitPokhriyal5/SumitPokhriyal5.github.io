import React, { useRef } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';

export const Navbar = () => {
  const homeRef=useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
    <div className='nav'>
    <p onClick={() => handleClick(homeRef)}>Home</p> 
      <p onClick={() => handleClick(aboutMeRef)}>About Me</p>
      <p onClick={() => handleClick(skillsRef)}>Skills</p>
      <p onClick={() => handleClick(projectsRef)}>Projects</p>
      <p onClick={() => handleClick(contactRef)}>Contact</p>
      <p onClick={() => handleClick(resumeRef)}>Resume</p>
    </div>
    <div ref={homeRef}>
        <Home/>
    </div>
    <div ref={aboutMeRef}>
        <About/>
    </div>
    <div ref={skillsRef}>
        <Skills/>
    </div>
    <div ref={projectsRef}>
        <Projects/>
    </div>
    <div ref={contactRef}>
        <Contact/>
    </div>
    <div ref={resumeRef}>
        <Resume/>
    </div>
    </>
  );
};
