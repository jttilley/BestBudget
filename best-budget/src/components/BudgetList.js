import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BudgetList({theList}) {
  console.log("🚀 ~ file: BudgetList.js ~ line 8 ~ BudgetList ~ theList", theList)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  if (theList === []) return;
    
  let listTitle = 'Budgeted:'
  if (theList[0].isExpense) {
    listTitle = 'Expenses:';
  }
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
  };

  const CalculateDebtLeft = item => {

    let totalLeft = 0.0
    
    console.log("🚀 ~ file: BudgetList.js ~ line 12 ~ BudgetList ~ item", item)
      if (item.debtTotal !== "") {

        //calculate what's left on the debt
        let today = new Date();

        // trim date off "2024-06-08T04:51:48.855Z" ISO string format
        let stDt = new Date(item.startDate.slice(0,item.startDate.indexOf("T")));

        // Figure out how many months have gone by
        let monthDiff = today.getMonth() - stDt.getMonth();
        let yearDiff = today.getFullYear() - stDt.getFullYear();
        
        if (yearDiff > 0) monthDiff += yearDiff * 12;
        

        totalLeft = parseFloat(item.debtTotal);

        // calculate payments affect on total with interest
        for (let i = 1; i <= monthDiff; i++) {
          let intPay = (totalLeft * item.interest)/12;
          totalLeft -= (item.amount - intPay)
          console.log("🚀 ~ file: BudgetList.js ~ line 32 ~ BudgetList ~ intPay", intPay)
          console.log("🚀 ~ file: BudgetList.js ~ line 32 ~ BudgetList ~ item.amount", item.amount)
          console.log("🚀 ~ file: BudgetList.js ~ line 32 ~ BudgetList ~ totalLeft", totalLeft)
          
          // done if paid off
          if (totalLeft <= 0) return 0.0;
        }
        
        console.log("🚀 ~ file: BudgetList.js ~ line 17 ~ BudgetList ~ totalLeft", totalLeft)
    }
    return totalLeft.toFixed(2);
  }
  
  return (
    <Grid container sx={{padding: 0}}>
      { theList.map((itm, idx) => {
        // console.log("idx", idx);
        // console.log("itm", itm);
        let gridId = "grid" + idx;
        let paperId = "paper"+ idx;

        let totalDebt = CalculateDebtLeft(itm);
        let txt = `${itm.name} - $${itm.amount}`;
        if (totalDebt > 0) {
          txt = `${itm.name} - $${itm.amount} of about $${totalDebt}`
        }

        return(
        <Grid item key={gridId} sx={{paddingTop: 1, paddingRight: 1, textAlign: 'right'}} xs={12}>
          { idx === 0 ? 
            <Typography sx={{textAlign: 'left'}}><strong>{listTitle}</strong></Typography> :
            <span></span> 
          }
          <Paper key={paperId}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >{txt}</Paper>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </Grid>
      )})}
    </Grid>
)};