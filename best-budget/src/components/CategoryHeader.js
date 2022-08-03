import React from "react";
import { Grid, Typography } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';

const CategoryHeader = ({category, budgetTotal, expenseTotal}) => {
  return (
    <Grid container sx={{textAlign: 'left'}}>
      <Grid item xs={4}>
        <Typography><strong>{category.name}</strong></Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography><SavingsIcon fontSize="medium" sx={{color: 'green'}}/> ${budgetTotal}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography><MonetizationOnIcon fontSize="medium" sx={{color: 'red'}}/> ${expenseTotal}</Typography>
      </Grid>
    </Grid>
  );
}

export default CategoryHeader;