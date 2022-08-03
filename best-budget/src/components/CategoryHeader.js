import React from "react";
import { Grid, Typography } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';

const CategoryHeader = ({category, budgetTotal, expenseTotal, estPercent}) => {
console.log("🚀 ~ file: CategoryHeader.js ~ line 7 ~ CategoryHeader ~ category", category)
  
  return (
    <Grid container sx={{textAlign: 'left'}}>
      <Grid item xs={4}>
        <Typography><strong>{category}</strong></Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography><SavingsIcon fontSize="small" sx={{color: 'green'}}/>${budgetTotal}</Typography>
      </Grid>
      { category === 'Income' ? <></> :
          <Grid item xs={3}>
            <Typography><MonetizationOnIcon fontSize="small" sx={{color: 'red'}}/>${expenseTotal}</Typography>
          </Grid>
      }
      <Grid item xs={2} sx={{textAlign: 'right'}}>
        <Typography> {estPercent}%</Typography>
      </Grid>
    </Grid>
  );
}

export default CategoryHeader;