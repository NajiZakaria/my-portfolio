import React from "react";
import { Helmet } from "react-helmet";
import "./Experiences.css";

function Experiences() {
  const experiences = [
    {
      company: "Internship at MASARAT APP",
      date: "March - July 2020",
      desc: "Conception and development a Quiz Application using \"React Native\" !!!",
    },
  ];
  return (
    <div className="experiences">
      <Helmet>
        <title>Naji Zakaria</title>
        <meta
          name="description"
          content="My name is Zakaria Naji and I am a Web/Mobile developer"
        />
      </Helmet>
      <h1>Experiences</h1>
      {experiences.map((exp) => (
        <div className="experiences__item">
          <div className="top">
            <h2>{exp.company}</h2>
            <h3>{exp.date}</h3>
          </div>
          <h4>{exp.desc}</h4>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
