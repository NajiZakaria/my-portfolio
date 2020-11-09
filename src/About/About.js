import React from "react";
import "./About.css";
import myPic from "../assets/pic.jpg";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="about">
      <Helmet>
        <title>Naji Zakaria</title>
        <meta
          name="description"
          content="My name is Zakaria Naji and I am a Web/Mobile developer"
        />
      </Helmet>
      <h1>ABOUT</h1>
      <div className="about__brief">
        <div className="about__briefText">
          <p>&nbsp;&nbsp;&nbsp;Hello! I'm Zakaria, a web developer based in Morocco.</p>
          <p>
            &nbsp;&nbsp;&nbsp;I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always increase my skills and my knowledge.
          </p>
        </div>
        <img
          src={myPic}
          alt="pdp"
        />
      </div>
    </div>
  );
}

export default About;
