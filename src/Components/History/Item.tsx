import React from "react";
import classes from "./../components.module.scss";

import { ReactComponent as BoltIcon } from "./../../Assets/bolt.svg";
import { ReactComponent as TrashIcon } from "./../../Assets/trash-alt.svg";
import { useTrackerContext } from "../../Context/expenseTrackerContext";
import { TrackerContextState } from "../../Types";


type ItemProps = {
  title: string;
  amount: number;
  type: string;
}

const Item: React.FC<ItemProps> = ({
  title = "Purchase Shoes",
  amount = 902.4,
  type = "EXPENSE",
}) => {
  return (
    <div className={classes.item}>
      <TypeIcon type={type} />
      <p>{title}</p>
      <p>{type}</p>
      <div className={classes.item__amount}>
        <h4>
          {type === "INCOME" ? "+" : "-"} ${amount}
        </h4>
      </div>
    </div>
  );
};


type TypeIconProps = {
  type: string
}
const TypeIcon: React.FC<TypeIconProps> = ({ type }) => {
  return (
    <div className={classes.item__type} data-type={type}>
      <BoltIcon width="26px" height="26px" />
    </div>
  );
};

type SimpleItemProps = {
  id: number;
  title: string;
  amount: number;
  type: string;
}

export const SimpleItem: React.FC<SimpleItemProps> = ({
  id,
  title = "Purchase Shoes",
  amount = 902.4,
  type = "EXPENSE",
}) => {
  const trackerCtx: TrackerContextState | null = useTrackerContext();

  const onDelete = () => trackerCtx?.removeTrackHistory(id);
  return (
    <div className={classes.simpleItem}>
      <div className={classes.simpleItem__delBtn} onClick={onDelete}>
        <TrashIcon width="20px" height="20px" />
      </div>
      <div className={classes.simpleItem__box} data-type={type}>
        <p>{title}</p>
        <h3>${amount}</h3>
      </div>
    </div>
  );
};

export default Item;
