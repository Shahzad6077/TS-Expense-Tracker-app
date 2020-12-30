import React from "react";
import classes from "./layout.module.scss";
const Layout: React.FC = ({ children }) => {
  return <div className={classes.layoutWrapper}>{children}</div>;
};

export default Layout;
