import React from 'react';
import { Grid, Paper } from '@mui/material';
import BudgetList from './BudgetList';


// list budget items
export default function BudgetItems( { budgetItems, expenseItems }) {
console.log("🚀 ~ file: BudgetItems.js ~ line 8 ~ BudgetItems ~ expenseItems", expenseItems)
console.log("🚀 ~ file: BudgetItems.js ~ line 8 ~ BudgetItems ~ budgetItems", budgetItems)
  
  return (
    <Grid container sx={{ padding: 0 }}>
      <Grid item xs={6}>
        {budgetItems.length === 0 ? <></> : <BudgetList theList={budgetItems}/>}
      </Grid>
      <Grid item xs={6}>
        {expenseItems.length === 0 ? <></> : <BudgetList theList={expenseItems}/>}
      </Grid>
    </Grid>
  );
}