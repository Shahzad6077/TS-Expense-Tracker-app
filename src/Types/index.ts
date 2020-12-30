import React from "react";

// TYPES RELATED TO CONTEXT.

export interface ExpenseObj {
  id: number;
  title: string;
  type: string;
  amount: number;
}

export interface InsertTackerHistoryReturn {
  isValid: boolean;
  msg: string;
}
export interface TrackerContextState {
  history: Array<ExpenseObj>;
  currentBalance: number;
  filter: string;
  incomeTotal: number;
  expenseTotal: number;
  insertTackerHistory: (arg0: ExpenseObj) => InsertTackerHistoryReturn;
  removeTrackHistory: (id: number) => void;
  setFilter: Function;
}
