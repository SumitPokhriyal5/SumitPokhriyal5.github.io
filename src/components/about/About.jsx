import React from "react";
import "./About.css";
import profile from "../img/my-img2.jpg";
import resume from "./Sumit_Pokhriyal_Resume.pdf";
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
              Results-driven Frontend Developer with 2.5+ years of experience building scalable, high-performance user interfaces for AI-driven and data-intensive applications.
              </p>
              <p className="about_text p_color">
              Proficient in HTML, CSS, JavaScript, React, TypeScript, and SASS, with a strong focus on user experience, performance optimization, and responsive design
              </p>
              <p className="about_text p_color">
              Delivered multiple production-ready web applications and solved 800+ DSA problems. A collaborative problem-solver eager to contribute to impactful engineering teams.
              </p>
              <div className="about_button d_flex align_items_center">
                <a
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1LQ5vTtSQWA6OzbTkP_3b5WPkEBEaabBm/view?usp=sharing",
                      "_blank"
                    )
                  }
                  href={resume}
                  download="fw21-1055_Sumit_Pokhriyal_Resume.pdf"
                >
                  <button className="about btn pointer">Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
