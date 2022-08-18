import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import styled from 'styled-components';
// import { maxWidth } from "@mui/system";

// add totals info to category header
const CategoryHeader2 = ({category, budgetTotal, expenseTotal, estPercent, income}) => {
// console.log("🚀 ~ file: CategoryHeader.js ~ line 7 ~ CategoryHeader ~ category", category)
  
  if (category === 'Income') {
    budgetTotal = income;
  }

  let budgLeft = budgetTotal - expenseTotal;
  let estAmt = income * estPercent/100;
  let percentage = Math.round((budgetTotal / income)*100);
  

  return (
    <Box sx={{
            display: 'grid',
            gap: 0,
            width: '100%',
            gridTemplateRows: 'repeat(2, 1fr)',
            }}>
      <Box sx={{display: 'inline-grid',
                gap:0,
                width:'100%',
                gridTemplateColumns: category === 'Income'
                ? 'repeat(2, 1fr)' 
                : 'repeat(4, 1fr)', 
                textAlign: category === 'Income' ? 'left' : 'right'}}>
        <Typography sx={{textAlign: 'left'}}><strong>{category}</strong></Typography>
        { category === 'Income' ? <Typography><SavingsIcon fontSize="small" sx={{color: 'green', alignItems: 'flex-end'}}/>${budgetTotal.toFixed(2)}</Typography> :
          <>
            <Typography sx={{color:'#666666', textAlign:'right', alignItems: 'flexEnd', fontSize: '9.5pt'}}> <i> Suggested:</i></Typography>
            <Typography sx={{color:'#666666'}}> <i> ${estAmt.toFixed(2)}</i></Typography>
            <Typography sx={{color:'#666666'}}> <i> {estPercent}%</i></Typography>
          </>
        }
      </Box>
      { category === 'Income' ? <></> :
        <Box sx={{display: 'inline-grid',
                gap:0,
                width:'100%',
                gridTemplateColumns: 'repeat(4, 1fr)', 
                textAlign: category === 'Income' ? 'left' : 'right'}}>
          
          <>
            { budgLeft > 0 ? 
              <Typography sx={{color: 'green', textAlign: 'left'}}><strong>${Math.abs(budgLeft).toFixed(2)}</strong></Typography> 
              : <>
              { budgLeft == 0 ? 
                <Typography sx={{textAlign: 'left'}}><strong>${Math.abs(budgLeft).toFixed(2)}</strong></Typography> 
                :
                <Typography sx={{color: 'red', textAlign: 'left'}}><strong>${Math.abs(budgLeft).toFixed(2)}</strong></Typography>
              }
              </>
            }
            <Typography sx={{textAlign: 'left'}}><SavingsIcon fontSize="small" sx={{color: 'green', alignItems: 'flex-end'}}/>${budgetTotal.toFixed(2)}</Typography>

            <Typography sx={{textAlign: 'right'}}><MonetizationOnIcon fontSize="small" sx={{color: 'red'}}/>${expenseTotal.toFixed(2)}</Typography>
            <Typography sx={{textAlign: 'right'}}> {percentage}%</Typography>
          </>
        </Box>
      }
    </Box>
  );
}

export default CategoryHeader2;