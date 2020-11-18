import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Link to="/">
            <img src="person.png" alt="people logo"></img>
          </Link>
        </div>
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <Link to="/people">Create Person</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;