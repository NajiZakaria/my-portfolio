import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { Route, useHistory, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  const size = useWindowSize();
  const history = useHistory();

  const scrollTo = (element) => {
    let offsetTop = document.getElementById(element).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
    element && history.push("#" + element);
  };

  return (
    <div className="app">
      <Helmet>
        <title>Naji Zakaria</title>
        <meta
          name="description"
          content="My name is Zakaria Naji and I am a Web/Mobile developer"
        />
      </Helmet>
      <Nav scrollTo={scrollTo} size={size} />
      <Route path="/">
        <div className="app__body">
          <Home size={size}/>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experiences">
            <Experiences />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </Route>
    </div>
  );
}

export default withRouter(App);

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
