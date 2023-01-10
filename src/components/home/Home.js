import './Home.css'
import logo from "../img/nameLogo.png"
import { useState } from 'react'

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
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
          <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)} >
            <div className='bar'></div>
          </div>
        </div>
        <div className='container'>
          <div className="home_content">
            <div className="home_meta">
              <h2 className='developer_content'>
                Hey there!
                <br></br>
                I'm Sumit Pokhriyal Aspiring
                <span> Web Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home