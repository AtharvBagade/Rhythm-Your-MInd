import React from "react";
import {
  Link
} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

import Custombutton from "./Custombutton";



function Navbar() {

  return (
    <nav>
      <div className="logo">
        Rhythm your body
      </div>

      <ul className="menu">
        <li className="menu-item">
        <Link to="/"> Home </Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/topic">Topics</Link>
        </li>
      </ul>
      <div className="hey">
       <Link to="/contact">
       <Custombutton txt="Contact Us!"></Custombutton>
       </Link>
      </div>

      <div className="menu-icon">
        <MenuIcon />
      </div>

    </nav>

  
  );
}

export default Navbar;