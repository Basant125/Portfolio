import React from "react";
import "./About.css";
import rocket from "../../Assest/70101-rocket-cviolet.gif";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h3>Get Awesome</h3>
        <br />
        <h3 className="color">Services</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel.
        </p>
        <a href="myResume.pdf" download=" basant myResume.pdf">
          <button className="downloadCv">Get Resume</button>
        </a>
      </div>
      <div className="about-right">
        {/* <h3 className="about_title">About</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          porro quaerat magni iusto eaque quasi consequatur vero. Placeat,
          voluptate doloremque!
        </p> */}
        <img src={rocket} alt="" />
      </div>
    </div>
  );
};

export default About;
