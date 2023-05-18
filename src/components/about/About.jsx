import React from "react";
import "./About.css";
import profile from "../img/my-img.jpg";
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
                A self-motivated, hard-working, and ambitious Full-Stack Web
                Developer with proficiency in HTML, CSS, JavaScript, ReactJS,
                NodeJS, ExpressJS, MongoDB, SASS, TypeScript, and more.
              </p>
              <p className="about_text p_color">
                Problem-solving mindset and the ability to perform well in
                collaboration. With over 1200 hours of coding experience, have
                solved over 700 DSA problems and developed many fully functional
                websites.
              </p>
              <p className="about_text p_color">
                Looking forward to working as an accountable and competent
                employee in an exciting tech company.
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
