import React from "react";

const BudgetContext = React.createContext({
  //for database data
  // results: {}, //contains budget and expense items from the database

  //array of objects for category totals
  // categoryBudgetTotals: [], //{category: "", total: 0}
  // categoryExpenseTotals: [], //{category: "", total: 0}

  // functions for updating
  addItem: () => {},
  handleItemChanges: () => {},
  handleAmountChanges: () => {},
});

export default BudgetContext;