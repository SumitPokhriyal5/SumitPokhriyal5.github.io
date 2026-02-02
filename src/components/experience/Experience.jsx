import React from "react";
import "./Experience.css";
import hypergro from "../img/hypergro_logo.jpeg";
import kbinfospace from "../img/KBinfospace_logo.jpeg";
const Experience = () => {
  return (
    <div className="experience component_space" id="Experience">
      <div className="heading">
        <h1 className="heading">Work Experience</h1>
        <p className="heading p_color">
        As a software developer,  
        </p>
        <p className="heading p_color">
        I have experience working with various technologies and programming languages.
        </p>
      </div>
      <div className="container">
          <div className="col_3">
              <div className="icon">
                <div className="logo">
                  <img src={hypergro} alt="hypergro logo" />
                </div>
              </div>

              <div className="experience_meta">
                <h1 className="experience_text">hypergro.ai - Software Developer Engineer - 1</h1>
                <h2 className="duration_text">April 2024 - Present</h2>
                <p className="p experience_text p_color">
                Built and scaled production-grade products from scratch using modular, high-performance architectures, including a chat-based AI ad generation system with scalable async workflows for image, video, and audio creation. Delivered pixel-perfect, SEO-optimized landing pages at speed, while owning deployments, analytics, and UI quality—achieving 99.9% uptime, improving insight accuracy by 35%, reducing UI bugs by 30%, and mentoring 3 interns.
                </p>
            </div>
          </div>
          <div className="col_3">
              <div className="icon">
                <div className="logo">
                  <img src={kbinfospace} alt="kbinfospace logo" />
                </div>
              </div>

              <div className="experience_meta">
                <h1 className="experience_text">KBinfospace - Frontend Developer</h1>
                <h2 className="duration_text">April 2023 - March 2024</h2>
                <p className="p experience_text p_color">
                Built a modern, responsive company website from scratch using React, TypeScript, and Material UI, with Firebase-based authentication and backend services, while implementing SEO best practices for improved visibility and performance. Took full ownership of frontend development, debugging, testing, and bug fixes to ensure high-quality, reliable deliverables.
                </p>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Experience;
