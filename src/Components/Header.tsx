import React from "react";
import classes from "./components.module.scss";

const Header: React.FC = () => {
  return (
    <header className={"container " + classes.header}>
      <h1 className="logo-font">Expense Tracker</h1>
    </header>
  );
};

export default Header;
