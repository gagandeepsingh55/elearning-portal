import React from "react";
import classes from "./Layout.css";
import HeadNav from "./HeadNav";

const Layout = (props) => {
  return (
    <div>
      <HeadNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;