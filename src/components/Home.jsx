import React from "react";
import "animate.css";

const Home = () => {
  return (
    <div className="home animated fadeIn">
      <img
        src="https://ca.slack-edge.com/T04ESBCHT4P-U04GFV6P8N4-672883ba7ab3-512"
        alt="my profile"
        className="profile-picture"
      />
      <h1 className="name animated fadeIn">Sumit Pokhriyal</h1>
      <h2 className="title animated fadeIn">Web Developer</h2>
      <p className="description animated fadeIn">
        A self-motivated, hard-working, and ambitious Full-Stack Web Developer
        with proficiency in HTML, CSS, Javascript, and ReactJS. Problem-solving
        mindset and the ability to perform well in collaboration. 1000+ hours of
        coding and hands-on experience in developing 2 fully functional
        Websites. I am looking forward to working as an accountable and
        competent employee in an exciting tech company.
      </p>

      <button className="contact-button">Contact Me</button>
    </div>
  );
};

export default Home;
