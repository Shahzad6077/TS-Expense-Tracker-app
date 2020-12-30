import React, { Fragment, useState } from "react";
import classes from "./../components.module.scss";
// import Filter from "./Filter";
import List from "./List";
import { ReactComponent as HistoryIcon } from "./../../Assets/history.svg";
import { ReactComponent as BackArrowIcon } from "./../../Assets/long-arrow-left.svg";

const History: React.FC = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  const toggleOpener = () => setIsHistoryOpen((p) => !p);
  return (
    <div className={classes.historyWrapper}>
      <span onClick={toggleOpener} className={classes.historyBtn}>
        {!isHistoryOpen ? (
          <HistoryIcon width={32} height={32} />
        ) : (
            <BackArrowIcon width={32} height={32} />
          )}
      </span>
      {isHistoryOpen && (
        <Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0px 1rem 0px",
            }}
          >
            {/* <Filter /> */}
            <h3>History</h3>
          </div>
          <div className={"styleScroll " + classes.history}>
            <List />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default History;
