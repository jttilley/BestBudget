import React from 'react';

const BudgetContext = React.createContext({
  //variables
  budgetCategories: [],
  newItemCategory: '',
  
  // Data for calculation
  incomeTotal: 0,
  
  // functions for updating
  addItem: () => {},
  handleItemChanges: () => {},
  handleAmountChanges: () => {},
  

});

export default BudgetContext;