import React from 'react';
import { Grid, Paper } from '@mui/material';
import BudgetList from './BudgetList';


// list budget items
export default function BudgetItems( { budgetItems, expenseItems }) {
  
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