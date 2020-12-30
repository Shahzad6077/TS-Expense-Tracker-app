import React, { useMemo } from "react";
import { useTrackerContext } from "../../Context/expenseTrackerContext";
import classes from "./../components.module.scss";
import { TrackerContextState } from "../../Types";
import { SimpleItem } from "./Item";

const List: React.FC = () => {
  const trackerCtx: TrackerContextState | null = useTrackerContext();

  const history = trackerCtx?.history;
  const filter = trackerCtx?.filter;

  const renderList = useMemo(() => {
    return history?.filter((o) => {
      if (filter === "ALL") {
        return true;
      } else {
        return filter === o.type;
      }
    })
      .map((o, i) => <SimpleItem key={i} {...o} />);
  }, [history, filter]);
  return <div className={classes.itemWrapper}>{renderList}</div>;
};

export default List;
