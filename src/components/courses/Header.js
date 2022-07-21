import React from "react";
import classes from "./Header.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.textbox}>
        <img src="/header.png" className={classes.headerimg}></img>
        <div className={classes.text}>
          <div>Discover Latest Courses on</div>

          <div className={classes.text1}>React</div>
        </div>
      </div>
    </div>
  );
};

export default Header;