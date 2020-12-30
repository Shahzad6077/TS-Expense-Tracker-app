import React from "react";
import classes from "./modal.module.scss";

type Props = {
  isOpen: boolean;
}

const Modal: React.FC<Props> = ({ isOpen, children }) => {
  if (isOpen) {
    return <div className={classes.modalWrapper}>{children}</div>;
  } else {
    return null;
  }
};

export default Modal;
