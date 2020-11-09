import React, { useEffect, useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import Resume from "../assets/resume.pdf";
import "./Nav.css";
import { Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

function Nav({ size,scrollTo }) {
  const [isOpen,setIsOpen]=useState(false)
  const [navOptionsStyle,setNavOptionsStyle]=useState("horizontalNav__options")

  
  const onRightMenu= ()=>{
    setNavOptionsStyle("verticalNav__options transition")
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const handleClick = elm =>{
    scrollTo(elm);
    setIsOpen(false)
  }

  
  useEffect(() => {
    if(size >="750" ) {setNavOptionsStyle("horizontalNav__options");setIsOpen(false)}
  }, [size])


  return (
    <div className="nav">
      <a href="https://najizakaria.com">N z</a>
      {size.width >= "700" || isOpen ? (
        <div className={navOptionsStyle }>
          {isOpen && <div onClick={()=>onRightMenu()}><CloseIcon/></div>}
          {isOpen && <div id="triangle"></div>}
          <Button className="nav__option" onClick={()=>handleClick("about")}>
            <p>About</p>
          </Button>
          <Button className="nav__option" onClick={()=>handleClick("skills")}>
            <p>Skills</p>
          </Button>
          <Button className="nav__option" onClick={()=>handleClick("experiences")}>
            <p>Experiences</p>
          </Button>
          <Button className="nav__option" onClick={()=>handleClick("projects")}>
            <p>Projects</p>
          </Button>
          <Button className="nav__option" onClick={()=>handleClick("contact")}>
            <p>Contact</p>
          </Button>
          <a href={Resume} className="nav__option resume" target="_blank" rel='noopener noreferrer' download>
            <p>Resume</p> 
          </a>
        </div>
      ) : (
        <div onClick={()=>onRightMenu()}><ReorderIcon/></div>
      )}
    </div>
  );
}

export default Nav;
