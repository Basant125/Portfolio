import React from "react";
import "./Skill.css";
import html from "../../Assest/html.png";
import css from "../../Assest/css.png";
import javascript from "../../Assest/js-file.png";
import nodejs from "../../Assest/nodejs.png";
import atom from "../../Assest/atom.png";

const Skill = () => {
  return (
    <div className="skill">
      <div className="skill_container">
        <h4 className="skill_title">skills</h4>
        <div className="skill_html skill_item">
          <img src={html} alt="" />
          <h4>HTML</h4>
        </div>
        <div className="skill_css skill_item">
          <img src={css} alt="" />
          <h4>CSS</h4>
        </div>
        <div className="skill_js skill_item">
          <img src={javascript} alt="" />
          <h4>JAVASCRIPT</h4>
        </div>
        <div className="skill_react skill_item">
          <img src={atom} alt="" />
          <h4>React</h4>
        </div>
        <div className="skill_node skill_item">
          <img src={nodejs} alt="" />
          <h4>Node js</h4>
        </div>
      </div>
    </div>
  );
};

export default Skill;
