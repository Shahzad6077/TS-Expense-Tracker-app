import React from "react";
import { useTrackerContext } from "../../Context/expenseTrackerContext";
import classes from "./../components.module.scss";
import { TrackerContextState } from "./../../Types";

const Filter: React.FC = () => {
  const trackerCtx: TrackerContextState | null = useTrackerContext();

  return (
    <div className={" " + classes.filter}>
      <ul>
        <li data-active={trackerCtx?.filter === "ALL"} onClick={() => trackerCtx?.setFilter("ALL")}>
          All
        </li>
        <li
          data-active={trackerCtx?.filter === "INCOME"}
          onClick={() => trackerCtx?.setFilter("INCOME")}
        >
          Income
        </li>
        <li
          data-active={trackerCtx?.filter === "EXPENSE"}
          onClick={() => trackerCtx?.setFilter("EXPENSE")}
        >
          Expenses
        </li>
      </ul>
    </div>
  );
};

export default Filter;
