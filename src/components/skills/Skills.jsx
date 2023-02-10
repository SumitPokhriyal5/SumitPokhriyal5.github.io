import React from "react";
import "./Skills.css";
import js from "../img/JavaScript-logo.png";
import rct_logo from '../img/react-logo.svg';
import chakraUI from '../img/chakraUI-logo.png';
import html from '../img/html-logo.webp';
import css from '../img/css-logo.webp';
import next from '../img/next-logo.png';
import nodeJS from '../img/nodeJS-logo.png';
import express from '../img/expressJS.png';
import mongoDB from '../img/mongodb.svg';
import git from '../img/git-logo.png';
import github from '../img/github-logo.png';
import vscode from '../img/vsCode-logo.png';

const Skills = () => {
  return (
    <div className="skills component_space" id="Skills">
      <div className="heading">
        <h1 className="heading">My Skills</h1>
        <p className="heading p_color">
        As a web developer,  
        </p>
        <p className="heading p_color">
        I have a strong set of skills in various technologies and programming languages.
        </p>
      </div>
      <div className="container">
          <div className="col_3">
              <div className="icon">
                <div className="logo">
                  <img src={js} alt="javascript logo" />
                </div>
              </div>

              <div className="skills_meta">
                <h1 className="skills_text">Languages</h1>
                <p className="p skills_text p_color">
                  I am confident in my ability to use JavaScript to create a
                  wide range of web applications, from simple interactive
                  websites to complex web applications with many different user
                  interactions and features.
                </p>
            </div>
          </div>

          <div className="col_3">
              <div className="icon">
              <div className="logo">
                  <img src={rct_logo} alt="react logo" />
                </div>
                <div className="logo">
                  <img src={chakraUI} alt="chakraUI logo" />
                </div>
                <div className="logo">
                  <img src={html} alt="html logo" />
                </div>
                <div className="logo">
                  <img src={css} alt="css logo" />
                </div>
                <div className="logo">
                  <img src={next} alt="nextJS logo" />
                </div>
              </div>
              <div className="skills_meta">
                <h1 className="skills_text">Front-End</h1>
                <p className="p skills_text p_color">
                As a web developer, I have a strong set of skills in various technologies, including React JS, Chakra UI, HTML, CSS and Next JS.
                </p>
              </div>
          </div>

          <div className="col_3">
              <div className="icon">
              <div className="logo">
                  <img src={nodeJS} alt="node js logo" />
                </div>
                <div className="logo">
                  <img src={express} alt="express js logo" />
                </div>
                <div className="logo">
                  <img src={mongoDB} alt="mongoDB logo" />
                </div>
              </div>
              <div className="skills_meta">
                <h1 className="skills_text">Back-End</h1>
                <p className="p skills_text p_color">
                As a web developer, I have experience with Node.js, Express.js and MongoDB, which are popular technologies used to build server-side web applications.
                </p>
              </div>
          </div>

          <div className="col_3">
              <div className="icon">
              <div className="logo">
                  <img src={git} alt="git logo" />
                </div>
                <div className="logo">
                  <img src={vscode} alt="vs code logo" />
                </div>
                <div className="logo">
                  <img src={github} alt="github logo" />
                </div>
              </div>
              <div className="skills_meta">
                <h1 className="skills_text">Tools</h1>
                <p className="p skills_text p_color">
                As a web developer, I have strong experience working with Git, Visual Studio Code, and GitHub, which are popular tools used for version control, code editing, and collaboration.
                </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
