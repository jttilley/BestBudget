import React from "react";
import { Grid, Typography } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';

const CategoryHeader = ({category, budgetTotal, expenseTotal, estPercent, income}) => {
// console.log("🚀 ~ file: CategoryHeader.js ~ line 7 ~ CategoryHeader ~ category", category)
  
  if (category === 'Income') budgetTotal = income;
  let budgLeft = budgetTotal - expenseTotal;
  let estAmt = income * estPercent/100;
  let percentage = Math.round((budgetTotal / income)*100);

  return (
    <>
      <Grid container sx={{textAlign: 'left'}}>
        <Grid item xs={4}>
          <Typography><strong>{category}</strong></Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography><SavingsIcon fontSize="small" sx={{color: 'green', alignItems: 'flex-end'}}/>${budgetTotal}</Typography>
        </Grid>
        { category === 'Income' ? <Grid item xs={3}></Grid> :
            <Grid item xs={3}>
              <Typography><MonetizationOnIcon fontSize="small" sx={{color: 'red'}}/>${expenseTotal}</Typography>
            </Grid>
        }
        <Grid item xs={2} sx={{textAlign: 'right'}}>
          <Typography> {percentage}%</Typography>
        </Grid>
        { category === 'Income' ? <></> :
          <>
            <Grid item xs={3} sx={{textAlign: 'left'}}>
              { budgLeft > 0 ? 
                <Typography sx={{color: 'green'}}>Left: {budgLeft}</Typography> 
                :
                <Typography sx={{color: 'red'}}>Left: {budgLeft}</Typography>
              }
            </Grid>
            <Grid item xs={3} sx={{textAlign: 'right'}}>
              <Typography> Estimates:</Typography>
            </Grid>
            <Grid item xs={2} sx={{textAlign: 'center'}}>
              <Typography> ${estAmt}</Typography>
            </Grid>
            <Grid item xs={2} sx={{textAlign: 'right'}}>
              <Typography> {estPercent}%</Typography>
            </Grid>
          </>
        }
      </Grid>
    </>
  );
}

export default CategoryHeader;