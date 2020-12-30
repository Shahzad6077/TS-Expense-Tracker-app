import React from "react";
import { useTrackerContext } from "../Context/expenseTrackerContext";
import classes from "./components.module.scss";
import amountStringConverter from "../Helper/amountStringConverter";
import { TrackerContextState } from "../Types";

const BalanceWrapper: React.FC = () => {
  const trackerCtx: TrackerContextState | null = useTrackerContext();

  return (
    <div className={classes.balanceWrapper}>
      <h4>Your Balance</h4>
      <h4>{amountStringConverter(trackerCtx?.currentBalance as number)}</h4>
      <div className={classes.balanceWrapper__typeBox}>
        <span>Income</span>
        <span>Expense</span>
        <span>{amountStringConverter(trackerCtx?.incomeTotal as number)}</span>
        <span>{amountStringConverter(trackerCtx?.expenseTotal as number)}</span>
      </div>
    </div>
  );
};

export default BalanceWrapper;
