import { Height } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
function Home({size}) {


  return (
    
    <div className="home">
      <Helmet>
        <title>Naji Zakaria</title>
        <meta
          name="description"
          content="My name is Zakaria Naji and I am a Web/Mobile developer"
        />
      </Helmet>
      <h1>Hi, my name is </h1>
      <h2>Naji Zakaria .</h2>
      <h3>I am a Web and Mobile developer</h3>
      <a href="mailto:najizakaria27@gmail.com">Get In Touch</a>
    </div>
  );
}

export default Home;
