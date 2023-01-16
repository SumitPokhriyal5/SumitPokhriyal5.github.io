import React from "react";
import './Contact.css';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className="contacts" id="Contact">
      <h1 className="heading">Contact</h1>
      <div className="details">
        <h3 className="ph-num">Contant Number - +91-8755822259</h3>
        <h3 className="em-adr">Email Address - sumitstan1998@gmail.com</h3>
        <h3 className="address">Address - Kashipur, Uttarakhand</h3>
      </div>
      <div className="sc-links">
        <div onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/SumitPokhriyal5/",
                      "_blank"
                    )
                  } className="linkedIn"><AiFillLinkedin/></div>
        <div onClick={() =>
                    window.open(
                      "https://github.com/SumitPokhriyal5",
                      "_blank"
                    )
                  } className="github"><AiFillGithub/></div>
        <div className="email"><AiOutlineMail/></div>
      </div>
    </div>
  );
};

export default Contact;
