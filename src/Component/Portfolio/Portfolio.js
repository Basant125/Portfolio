import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import profile from "../../Assest/profile2.png";
import MenuIcon from "@mui/icons-material/Menu";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <main>
        <header>
          <div className="logo">
            <h3>BASANT</h3>
          </div>
          <div className="links">
            <li>Home</li>
            <li>About Us</li>
            <li className="contactUs">Contact Us</li>
            <span className="hamburger">
              <MenuIcon />
            </span>
          </div>
        </header>
        <div className="hero">
          <div className="hero-left">
            <h1>
              Hy! I Am <br /> Basant Kumar
            </h1>
            <p>Front-end Engineer</p>

            <button className="btn hire">Hire me</button>
          </div>
          <div className="hero-right">
            <img src="" alt="" />
          </div>
        </div>
      </main>
      <About />
      <Skill />
      <Project />
      <footer>
        <div className="icons">
          <FacebookRoundedIcon className="footer_icon" />
          <GitHubIcon className="footer_icon" />
          <LinkedInIcon className="footer_icon" />
        </div>
        2022@ HAPPY CODING
      </footer>
      {/* <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br /> */}
    </div>
  );
};

export default Portfolio;
