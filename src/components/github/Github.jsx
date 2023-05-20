import React from "react";
import stats from "../img/stats.png";
import lang from "../img/lang.png";
import "./Github.css";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="github" id="Github">
      <div className="stats">
        <h1 className="heading">My Statistics</h1>
        <div className="stats_img">
          <img src={stats} alt="" />
          <img src={lang} alt="" />
        </div>
        <div className="calender">
          <h1 className="heading">My GitHub Calender</h1>
          <div className="calender_img">
            <GitHubCalendar
              username="SumitPokhriyal5"
              blockSize={15}
              blockMargin={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
