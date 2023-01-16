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

const Projects = () => {
  return (
    <div className="projects component_space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col_3">
            <div className="projects_box pointer">
              <div className="screenshot">
                <img src={yoox} alt="" />
              </div>
              <div className="icon">
                <div className="logo">
                  <img src={html} alt="html logo" />
                </div>
                <div className="logo">
                  <img src={css} alt="css logo" />
                </div>
                <div className="logo">
                  <img src={js} alt="javascript logo" />
                </div>
                <div className="logo">
                  <img src={github} alt="github logo" />
                </div>
              </div>

              <div className="projects_meta">
                <h1 className="projects_text">YOOX Clone</h1>
                <p className="p projects_text p_color">
                  An e-commerce website that provides you with fashion-related
                  products. This is an individual project built in 4 days. Built
                  website landing page, Men's page, Sign-in and Sign-up page and
                  Product details page with the help of HTML, CSS and
                  JavaScript.
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

          <div className="col_3">
            <div className="projects_box pointer">
              <div className="screenshot">
                <img src={modesens} alt="" />
              </div>
              <div className="icon">
                <div className="logo">
                  <img src={html} alt="html logo" />
                </div>
                <div className="logo">
                  <img src={css} alt="css logo" />
                </div>
                <div className="logo">
                  <img src={js} alt="javascript logo" />
                </div>
                <div className="logo">
                  <img src={github} alt="github logo" />
                </div>
              </div>

              <div className="projects_meta">
                <h1 className="projects_text">Modesens Clone</h1>
                <p className="p projects_text p_color">
                  An e-commerce website that provides you with fashion-related
                  products. This was a group project built in 4 days. My work
                  was here to create Homepage and Mens page with the help of
                  HTML, CSS and JavaScript.
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
          </div>

          <div className="col_3">
            <div className="projects_box pointer">
              <div className="screenshot">
                <img src={timesand} alt="" />
              </div>
              <div className="icon">
                <div className="logo">
                  <img src={html} alt="html logo" />
                </div>
                <div className="logo">
                  <img src={css} alt="css logo" />
                </div>
                <div className="logo">
                  <img src={rct} alt="javascript logo" />
                </div>
                <div className="logo">
                  <img src={chakra} alt="javascript logo" />
                </div>
                <div className="logo">
                  <img src={github} alt="github logo" />
                </div>
              </div>

              <div className="projects_meta">
                <h1 className="projects_text">TMetric Clone</h1>
                <p className="p projects_text p_color">
                  A Time Tracking website by which you can manage your work.
                  This is an individual project built in 4 days. Built website landing page, Pricing page and Sign-in & Sign-up page with the help of HTML, CSS, React JS and Chakra UI.
                </p>
              </div>
              <div className="project_links">
                <button
                  onClick={() =>
                    window.open(
                      "https://63a04a425806376a9b2344a4--timesand.netlify.app/",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
