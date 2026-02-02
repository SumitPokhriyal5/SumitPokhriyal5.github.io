import React from "react";
import js from "../img/JavaScript-logo.png";
import "./Projects.css";
import yoox from "../img/yoox.png";
import html from "../img/html-logo.webp";
import css from "../img/css-logo.webp";
import github from "../img/github-logo.png";
import modesens from "../img/modesen.png";
import timesand from "../img/timesand.png";
import rct from "../img/react-logo.svg";
import chakra from "../img/chakraUI-logo.png";
import vipmart from "../img/vipmart.png";
import firebase from "../img/firebase.png";
import fg_ss from "../img/fg-ss.png";
import nodeJS from "../img/nodeJS-logo.png";
import express from "../img/expressJS.png";
import mongoDB from "../img/mongodb.svg";
import ts from "../img/ts.png";
import scss from "../img/scss.png";
import vite from "../img/vite.png";

const Projects = () => {
  return (
    <div className="projects component_space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
      </div>
      <div className="container">
        
        <div className="col_3">
          <div className="screenshot">
            <img
              src="https://github.com/SumitPokhriyal5/smovie/assets/112632728/5e86183f-801a-4a8b-8648-4182f8e976d8"
              alt=""
            />
          </div>
          <div className="icon">
            <div className="logo">
              <img src={ts} alt="html logo" />
              <h4>TypeScript</h4>
            </div>
            <div className="logo">
              <img src={scss} alt="css logo" />
              <h4>SCSS</h4>
            </div>
            <div className="logo">
              <img src={vite} alt="react logo" />
              <h4>Vite</h4>
            </div>
            <div className="logo">
              <img src={github} alt="github logo" />
              <h4>GitHub</h4>
            </div>
          </div>

          <div className="projects_meta">
            <h1 className="projects_text">SMovie</h1>
            <p className="p projects_text p_color">
              A user-friendly website to explore favorite movies and TV shows.
              Built in 5 days with Vite, TypeScript, SCSS, and TMDB API.
              Effortlessly discover and enjoy a wide range of content. Ideal for
              movie enthusiasts and TV lovers.
            </p>
          </div>
          <div className="project_links">
            <button
              onClick={() =>
                window.open(
                  "https://smovie-sumitpokhriyal5.vercel.app",
                  "_blank"
                )
              }
              className="deploy_link btn pointer"
            >
              Check it out!
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/SumitPokhriyal5/smovie",
                  "_blank"
                )
              }
              className="github_link btn pointer"
            >
              Github Link
            </button>
          </div>
        </div>

        <div className="col_3">
          <div className="screenshot">
            <img src={fg_ss} alt="" />
          </div>
          <div className="icon">
            <div className="logo">
              <img src={html} alt="html logo" />
              <h4>HTML</h4>
            </div>
            <div className="logo">
              <img src={css} alt="css logo" />
              <h4>CSS</h4>
            </div>
            <div className="logo">
              <img src={rct} alt="react logo" />
              <h4>React</h4>
            </div>
            <div className="logo">
              <img src={chakra} alt="chakra logo" />
              <h4>Chakra UI</h4>
            </div>
            <div className="logo">
              <img src={github} alt="github logo" />
              <h4>GitHub</h4>
            </div>
            <div className="logo">
              <img src={nodeJS} alt="github logo" />
              <h4>Node Js</h4>
            </div>
            <div className="logo">
              <img src={express} alt="github logo" />
              <h4>Express Js</h4>
            </div>
            <div className="logo">
              <img src={mongoDB} alt="github logo" />
              <h4>Mongo DB</h4>
            </div>
          </div>

          <div className="projects_meta">
            <h1 className="projects_text">EddieBauer Clone</h1>
            <p className="p projects_text p_color">
              An e-commerce website that provides you with fashion-related
              products. This was a group project built in 4 days. My work was
              here to create Authentication(Login, SignUp and Forgot Password)
              both backend and frontend functionality HTML, CSS, React JS,
              Chakra UI, GitHub, Node JS, Express JS, MongoDB.
            </p>
          </div>
          <div className="project_links">
            <button
              onClick={() =>
                window.open("https://fashion-gallery.vercel.app/", "_blank")
              }
              className="deploy_link btn pointer"
            >
              Check it out!
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Durgesh9871/straight-treatment-9798",
                  "_blank"
                )
              }
              className="github_link btn pointer"
            >
              Github Link
            </button>
          </div>
        </div>

        <div className="col_3">
          <div className="screenshot">
            <img src={vipmart} alt="" />
          </div>
          <div className="icon">
            <div className="logo">
              <img src={html} alt="html logo" />
              <h4>HTML</h4>
            </div>
            <div className="logo">
              <img src={css} alt="css logo" />
              <h4>CSS</h4>
            </div>
            <div className="logo">
              <img src={rct} alt="react logo" />
              <h4>React</h4>
            </div>
            <div className="logo">
              <img src={chakra} alt="chakra logo" />
              <h4>Chakra UI</h4>
            </div>
            <div className="logo">
              <img src={github} alt="github logo" />
              <h4>GitHub</h4>
            </div>
            <div className="logo">
              <img src={firebase} alt="github logo" />
              <h4>Firebase</h4>
            </div>
          </div>

          <div className="projects_meta">
            <h1 className="projects_text">FlipKart Clone</h1>
            <p className="p projects_text p_color">
              An e-commerce website that provides you with all kinds of product.
              This was a group project built in 4 days. My work was here to
              create profile, navbar, Login and Signup page with the help of
              HTML, CSS, React, ChakraUI and Firebase.
            </p>
          </div>
          <div className="project_links">
            <button
              onClick={() =>
                window.open(
                  "https://spiffy-crostata-d83d60.netlify.app/",
                  "_blank"
                )
              }
              className="deploy_link btn pointer"
            >
              Check it out!
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/YashSharma7746/lying-flesh-4692",
                  "_blank"
                )
              }
              className="github_link btn pointer"
            >
              Github Link
            </button>
          </div>
        </div>

        <div className="col_3">
          <div className="screenshot">
            <img src={timesand} alt="" />
          </div>
          <div className="icon">
            <div className="logo">
              <img src={html} alt="html logo" />
              <h4>HTML</h4>
            </div>
            <div className="logo">
              <img src={css} alt="css logo" />
              <h4>CSS</h4>
            </div>
            <div className="logo">
              <img src={rct} alt="react logo" />
              <h4>React</h4>
            </div>
            <div className="logo">
              <img src={chakra} alt="chakra logo" />
              <h4>Chakra UI</h4>
            </div>
            <div className="logo">
              <img src={github} alt="github logo" />
              <h4>GitHub</h4>
            </div>
          </div>

          <div className="projects_meta">
            <h1 className="projects_text">TMetric Clone</h1>
            <p className="p projects_text p_color">
              A Time Tracking website by which you can manage your work. This is
              an individual project built in 4 days. Built website landing page,
              Pricing page and Sign-in & Sign-up page with the help of HTML,
              CSS, React JS and Chakra UI.
            </p>
          </div>
          <div className="project_links">
            <button
              onClick={() =>
                window.open(
                  "https://peaceful-raindrop-bc4f09.netlify.app/",
                  "_blank"
                )
              }
              className="deploy_link btn pointer"
            >
              Check it out!
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/SumitPokhriyal5/poetic-match-7796",
                  "_blank"
                )
              }
              className="github_link btn pointer"
            >
              Github Link
            </button>
          </div>
        </div>

        <div className="col_3">
          <div className="screenshot">
            <img src={modesens} alt="" />
          </div>
          <div className="icon">
            <div className="logo">
              <img src={html} alt="html logo" />
              <h4>HTML</h4>
            </div>
            <div className="logo">
              <img src={css} alt="css logo" />
              <h4>CSS</h4>
            </div>
            <div className="logo">
              <img src={js} alt="javascript logo" />
              <h4>JavaScript</h4>
            </div>
            <div className="logo">
              <img src={github} alt="github logo" />
              <h4>GitHub</h4>
            </div>
          </div>

          <div className="projects_meta">
            <h1 className="projects_text">Modesens Clone</h1>
            <p className="p projects_text p_color">
              An e-commerce website that provides you with fashion-related
              products. This was a group project built in 4 days. My work was
              here to create Homepage and Mens page with the help of HTML, CSS
              and JavaScript.
            </p>
          </div>
          <div className="project_links">
            <button
              onClick={() =>
                window.open(
                  "https://gilded-sunshine-069a8e.netlify.app/index.html",
                  "_blank"
                )
              }
              className="deploy_link btn pointer"
            >
              Check it out!
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/SumitPokhriyal5/grubby-mitten-8672",
                  "_blank"
                )
              }
              className="github_link btn pointer"
            >
              Github Link
            </button>
          </div>
        </div>

        <div className="col_3">
          <div className="screenshot">
            <img src={yoox} alt="" />
          </div>
          <div className="icon">
            <div className="logo">
              <img src={html} alt="html logo" />
              <h4>HTML</h4>
            </div>
            <div className="logo">
              <img src={css} alt="css logo" />
              <h4>CSS</h4>
            </div>
            <div className="logo">
              <img src={js} alt="javascript logo" />
              <h4>JavaScript</h4>
            </div>
            <div className="logo">
              <img src={github} alt="github logo" />
              <h4>GitHub</h4>
            </div>
          </div>

          <div className="projects_meta">
            <h1 className="projects_text">YOOX Clone</h1>
            <p className="p projects_text p_color">
              An e-commerce website that provides you with fashion-related
              products. This is an individual project built in 4 days. Built
              website landing page, Men's page, Sign-in and Sign-up page and
              Product details page with the help of HTML, CSS and JavaScript.
            </p>
          </div>
          <div className="project_links">
            <button
              onClick={() =>
                window.open(
                  "https://moonlit-babka-c63cbd.netlify.app/",
                  "_blank"
                )
              }
              className="deploy_link btn pointer"
            >
              Check it out!
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/SumitPokhriyal5/cogent-attraction-2098",
                  "_blank"
                )
              }
              className="github_link btn pointer"
            >
              Github Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
