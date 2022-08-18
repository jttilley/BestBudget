import React from "react";

const BudgetContext = React.createContext({
  // functions for updating
  butonType: "",
  addItem: () => {},
  handleItemChanges: () => {},
  handleAmountChanges: () => {},
  
  // Data for calculation
  incomeTotal: 0,
  

});

export default BudgetContext;