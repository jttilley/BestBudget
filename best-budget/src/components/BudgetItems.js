import React from 'react';
import { Grid, Paper } from '@mui/material';
import BudgetList from './BudgetList';

// list budget items
export default function BudgetItems( { budgetItems, expenseItems }) {
// console.log("🚀 ~ file: BudgetItems.js ~ line 6 ~ BudgetItems ~ expenseItems", expenseItems)
// console.log("🚀 ~ file: BudgetItems.js ~ line 6 ~ BudgetItems ~ budgetItems", budgetItems)

  return (
    <Grid container sx={{ padding: 0 }}>
      <Grid item xs={6}>
        <BudgetList theList={budgetItems}/>
      </Grid>
      <Grid item xs={6}>
        <BudgetList theList={expenseItems}/>
      </Grid>
    </Grid>
  );
}