import React from "react";
import { Helmet } from "react-helmet";
import "./Skills.css";

function Skills() {
  const skills ={ 
    languages: ["C","Java", "JavaScript","PHP", "HTML", "CSS", "SQL"],
    tools : ["Bash","Git & Github","Chrome DevTools","Firebase","Photoshop"],
    frameworks : ["Node.js","React.js","React Native"],
  };
  
  return (
    <div className="skills">
      <Helmet>
        <title>Naji Zakaria</title>
        <meta
          name="description"
          content="My name is Zakaria Naji and I am a Web/Mobile developer"
        />
      </Helmet>
      <h1>Skills</h1>
      <div className="skills__categories">
        <div className="skills__category">
          <h2>Languages</h2>
          {skills.languages.map((lang) => (
            <h3>{lang}</h3>
          ))}
        </div>
        <div className="skills__category">
          <h2>Tools</h2>
          {skills.tools.map((tool) => (
            <h3>{tool}</h3>
          ))}
        </div>
        <div className="skills__category">
          <h2>Frameworks</h2>
          {skills.frameworks.map((framework) => (
            <h3>{framework}</h3>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
