import React from "react";
import {Linkedin, Github, StackOverflow} from 'react-bootstrap-icons';


export default function Footer(){
  return (
      <footer className="footer">
      <div>
        <a href="https://github.com/alma-dev914" target="_blank" rel="noreferrer"> <Linkedin />
        </a>

        <a href="https://www.linkedin.com/in/alma-braun-1b11731aa/" target="_blank" rel="noreferrer">
          <Github />
        </a>
  
        <a href="https://stackoverflow.com/users/16756150/alma-braun" target="_blank" rel="noreferrer">
          <StackOverflow />
        </a>
      </div>
    </footer>
  
  );
  }


