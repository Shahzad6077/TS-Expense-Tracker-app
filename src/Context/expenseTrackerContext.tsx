import React, { useContext, createContext, useState, useEffect } from "react";
import { ExpenseObj, TrackerContextState, InsertTackerHistoryReturn } from "./../Types";

// Create the Context for tracker App.
const trackerContext = createContext<TrackerContextState | null>(null);
const { Provider } = trackerContext;

const ARR = [
  { id: 12, title: "Purchase Shoes", type: "EXPENSE", amount: 30 },
  { id: 13, title: "PP Project", type: "INCOME", amount: 2200 },
  { id: 14, title: "Affiliate Sales", type: "INCOME", amount: 340 },
  { id: 15, title: "Domain & Hosting", type: "EXPENSE", amount: 74 },
  { id: 16, title: "Shared Hosting", type: "EXPENSE", amount: 74 },
];


const TrackerDataGen = (): TrackerContextState => {
  const [history, setHistory] = useState<Array<ExpenseObj>>([...ARR]);
  const [filter, setFilter] = useState<string>("ALL");
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const [incomeTotal, setIncomeTotal] = useState<number>(0);
  const [expenseTotal, setExpenseTotal] = useState<number>(0);

  useEffect(() => {
    let incomeTotal: number = 0;
    let expenseTotal: number = 0;

    history.forEach(({ type, amount }: ExpenseObj) => {
      if (type === "INCOME") {
        incomeTotal += amount;
      } else {
        expenseTotal += amount;
      }
    });

    const remainingBalance: number = incomeTotal - expenseTotal;
    setCurrentBalance(remainingBalance);
    setIncomeTotal(incomeTotal);
    setExpenseTotal(expenseTotal);
  }, [history]);

  const insertTackerHistory = ({ title, type, amount }: ExpenseObj) => {
    let checker: InsertTackerHistoryReturn = {
      isValid: true,
      msg: "",
    };
    if (title.length < 1) {
      checker.isValid = false;
      checker.msg += "Title must not be empty.";
    }
    if (type !== "INCOME" && type !== "EXPENSE") {
      checker.isValid = false;
      checker.msg += "-Type shoulde be INCOME or EXPENSE.";
    }
    if (amount < 1) {
      checker.isValid = false;
      checker.msg += "-Amount must not be empty.";
    }

    if (!checker.isValid) {
      return checker;
    }
    setHistory((p) => [
      {
        id: new Date().getTime(),
        title,
        type,
        amount,
      },
      ...p,
    ]);
    return checker;
  };
  const removeTrackHistory = (id: number) => {
    const clone = [...history];
    const historyFiltered = clone.filter((obj) => obj.id !== id);
    setHistory(historyFiltered);
  };
  return {
    history,
    insertTackerHistory,
    currentBalance,
    filter,
    setFilter,
    incomeTotal,
    expenseTotal,
    removeTrackHistory,
  };
};

export const TrackerProvider: React.FC = ({ children }) => {
  const data: TrackerContextState = TrackerDataGen();
  return <Provider value={data}>{children}</Provider>;
};

export const useTrackerContext = () => useContext(trackerContext);
