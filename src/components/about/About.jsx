import React from "react";
import "./About.css";
import profile from "../img/my-img.jpg";
import resume from './Sumit_Pokhriyal_Resume.pdf'
const About = () => {
  return (
    <div className="about component_space" id="About">
      <div className="container">
        <div className="row">
          <div className="col_2 abt_img_div">
            <img src={profile} alt="profile" className="about_img" />
          </div>
          <div className="col_2">
            <h1 className="about_heading">About Me</h1>
            <div className="about_meta">
              <p className="about_text p_color">
                A self-motivated, hard-working, and ambitious Full-Stack Web
                Developer with proficiency in HTML, CSS, Javascript, and
                ReactJS.
              </p>
              <p className="about_text p_color">
                Problem-solving mindset and the ability to perform well in
                collaboration. 1000+ hours of coding and hands-on experience in
                developing 2 fully functional websites.
              </p>
              <p className="about_text p_color">
                Looking forward to working as an accountable and competent
                employee in an exciting tech company.
              </p>
               <div className="about_button d_flex align_items_center">
                <button onClick={()=>window.open("https://drive.google.com/file/d/1LQ5vTtSQWA6OzbTkP_3b5WPkEBEaabBm/view?usp=sharing","_blank")} className="about btn pointer"><a href={resume} download>Resume</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
