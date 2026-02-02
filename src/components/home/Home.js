import './Home.css'
import logo from "../img/nameLogo.png"
import { useState } from 'react';
import resume from '../about/Sumit_Pokhriyal_Resume.pdf'

const Home = () => {
  window.addEventListener("scroll", function(){
    const header= this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY>0)
    
  })
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className='home' id='Home'>
      <div className='home_bg'>
        <div className='header Navbar'>
          <img style={{width:"200px"}} className='logo' src={logo} alt="logo" />
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Experience">Experience</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
            <a onClick={()=>window.open("https://drive.google.com/file/d/1LQ5vTtSQWA6OzbTkP_3b5WPkEBEaabBm/view?usp=sharing","_blank")} href={resume} download="fw21-1055_Sumit_Pokhriyal_Resume.pdf">Resume</a>
          </div>  
          <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)} >
            <div className='bar'></div>
          </div>
        </div>
        <div className='container' id='Home'>
          <div className="home_content">
            <div className="home_meta">
              <h2 className='developer_content'>
                Hey there!
                <br></br>
                I'm Sumit Pokhriyal,
                <span> Software Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home