import React, { Fragment, useState } from "react";
import { ReactComponent as PlusIcon } from "./../Assets/plus.svg";
import classes from "./components.module.scss";
import Modal from "../Utils/Modal";
import AddonInputField from "../Utils/AddonInputField/index";
import AddonSelectorField from "../Utils/AddonSelectorField/index";
import { useTrackerContext } from "../Context/expenseTrackerContext";

import { TrackerContextState } from "./../Types"

const InsertExpense: React.FC = () => {
  const [isInsertModalOpen, setInsertMdoalOpen] = useState(true);

  const modalHandler = () => setInsertMdoalOpen((p) => !p);
  return (
    <Fragment>
      <div className={classes.insertExpense}>
        <div className={classes.insertExpense__addBtn} onClick={modalHandler}>
          <PlusIcon width="30px" height="30px" />
        </div>
      </div>
      {isInsertModalOpen && <InsertModal modalHandler={modalHandler} />}
    </Fragment>
  );
};

type InsertModalProps = {
  modalHandler: () => void
}

interface InsertModalInputState {
  title: string;
  type: string;
  amount: number;
}
const InsertModal: React.FC<InsertModalProps> = ({ modalHandler }) => {

  const trackerCtx: TrackerContextState | null = useTrackerContext();
  const [inputObj, setInputObj] = useState<InsertModalInputState>({
    title: "",
    type: "",
    amount: 0,
  });

  const [msg, setMsg] = useState<null | string>(null);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.stopPropagation();
    const {
      target: { name, value },
    } = e;
    console.log(name, value)
    setInputObj((p) => ({ ...p, [name]: value }));
  };

  const onAddData = () => {

    const res = trackerCtx?.insertTackerHistory({ id: new Date().getTime(), ...inputObj });
    console.log(res);
    if (res?.isValid) {
      modalHandler();
    } else {
      setMsg(res?.msg as string);
    }
  };
  return (
    <Modal isOpen={true} >
      <div className={classes.insertionForm}>
        <h4>Add Transaction</h4>

        <AddonInputField
          name="title"
          type="text"
          onChange={onChangeInput}
          value={inputObj.title}
          placeholder="Title"
          required={true}
        />
        <AddonSelectorField
          name="type"
          onChange={onChangeInput}
          value={inputObj["type"]}
          optionsArr={[
            { value: "", text: "Please Select type" },
            { value: "INCOME", text: "Income" },
            { value: "EXPENSE", text: "Expense" },
          ]}
          required
          containerStyle={{ marginTop: "1rem" }}
        />
        <AddonInputField
          name="amount"
          type="number"
          onChange={onChangeInput}
          value={inputObj["amount"]}
          required
          placeholder="Amount"
          containerStyle={{ marginTop: "1rem" }}
        />
        {msg && (
          <h4 style={{ color: "DarkRed" }}>
            Invalid:{" "}
            {msg.split("-").map((str, i) => (
              <Fragment key={i}>
                <span>{str}</span>
                <br></br>
              </Fragment>
            ))}
          </h4>
        )}
        <button
          className={classes.cancelbtn}
          type="button"
          onClick={modalHandler}
        >
          <PlusIcon />
        </button>
        <button className={classes.addbtn} type="button" onClick={onAddData}>
          <PlusIcon />
        </button>
      </div>
    </Modal>
  );
};
export default InsertExpense;
