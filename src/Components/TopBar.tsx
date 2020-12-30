import React from "react";
import { useTrackerContext } from "../Context/expenseTrackerContext";
import { TrackerContextState } from "../Types";
import classes from "./components.module.scss";

type Props = {
  username: string;
}

const TopBar: React.FC<Props> = ({ username }) => {
  const trackerCtx: TrackerContextState | null = useTrackerContext();



  return (
    <div className={classes.topBar}>
      <div className={classes.topBar__item}>
        <h5>Hello,</h5>
        <h2>{username}</h2>
      </div>
      <div className={classes.topBar__item}>
        <h5>Current balance</h5>
        <h2>${trackerCtx?.currentBalance?.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default TopBar;
