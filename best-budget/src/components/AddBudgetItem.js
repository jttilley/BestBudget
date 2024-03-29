import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import { Grid, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import { Button, Input, InputLabel } from '@mui/material';
import BudgetContext from '../utils/BudgetContext';
// import BasicDatePicker from './calendarPicker'

// const itemStyling = styled(Paper)(({ theme }) => ({
//   paddingLeft: theme.spacing(5),
// }));

/***************************
 * things to do:
 *  create category state in budgetView so it can be updated by this and panel selection
 *  get category from state context
 * - local function calls budgetView function to change category
 * - when category panel is opened it updates the category state
 * 
 * should look like:
 *  category | type (*)
 *  description | amount | frequency
 *  total Due(**) | interest(**) | start date
 * 
 * *no type or interest or total due needed for Income
 *  label start date with 'Starting pay date'
 * 
 * **Only if category 'Debt' or 'Mortgage/Rent':
 *  show totla Due and interest other wise hide
 *  label start date with 'Starting Due Date'
 *  if Expense:
 *    don't show total due or interest
 *  for mortgages:
 *    figure out how to calculate mortgage decreases from total
 *    see if other pieces are needed or not
 *    
 * All other Categories:
 *  label start date with Due Date
 *  category | type
 *  description | amount | frequency
 *  due date (not required)
 ***************************/



export default function AddBudgetItem(props) {
  const { addItem, budgetCategories } = useContext(BudgetContext);
  console.log('🚀 ~ file: AddBudgetItem.js ~ line 18 ~ AddBudgetItem ~ budgetCategories', budgetCategories)
  const [errorMsg, setErrorMsg] = useState('');
  let [newItemCategory, setNewItemCategory] = useState('Income');

  const [itemState, setItemState] = useState({ 
    category: 'Income',
    description: '',
    amount: '0.00',
    startDate: null,
    frequency: 'Monthly',
    totalDebt: '0.00',
    interestRate: '0',
    type: 'Budget', 
  });

  let descLabel = 'Item Description'
  let amountLabel = 'Pay $'

  // create some dictionaries for sub categories and ids
  const subCategories = {};
  const ids = {};

  for (let i = 0; budgetCategories.length - 1; i++) {
    let cur = budgetCategories[i]
    subCategories[cur.name] = cur.subCategories;
    ids[cur.name] = cur.id
  }

  //change description label for income
  if (itemState.category === 'Income') {
    descLabel = 'Income Type'
    amountLabel = 'Paid $'
  }

  let startText = 'Due Date';

  //for local changes to inputs
  const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === 'category') {
      
    }
    setItemState({
      ...itemState,
      [name]: value,
    });
    
    console.log('itemstate',itemState);
  }

  const handleAddItem = (e) => {
    
    const {description, amount, type, debtTotal, interest} = itemState;

    let missingInput = '';

    if (description === '') missingInput += 'Item Description, ';
    if (amount === '') missingInput += 'Pay, ';
    if (type !== 'Budget' && type !== 'Expense') missingInput += 'Item Type must be Budget or Expense'

    if (itemState.category === 'Debt') {
      if (debtTotal === '') missingInput += 'Debt Total, ';
      if (interest === '') missingInput += 'Interest Rate, ';
    }
    
    if (missingInput !== '') {
      missingInput = missingInput.substring(0,missingInput.length - 2); //trim  off last comma & space
      setErrorMsg(`The item cannot be added because you are missing the following info: \r\n${missingInput}`);
      return;
    } else {
      setErrorMsg('');
    }

    addItem(description,amount,type,itemState.category,debtTotal,interest);
    
  }
  
  return (
    <form>
      <Grid container sx={{ padding: 0 }}>
      <Box>
          <Autocomplete
            disablePortal
            freeSolo
            id='description'
            options={budgetCategories.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} 
            variant='outlined' 
            label={descLabel}
            name='description' 
            size='small'
            spellCheck='true'
            autoWidth
            onChange={handleChange}
            onSelect={handleChange}
            />}
            />
        </Box>
        <Grid item xs={5}>
          <Autocomplete
            disablePortal
            freeSolo
            id='description'
            options={subCategories[itemState.category].map((option) => option)}
            renderInput={(params) => <TextField {...params} 
            variant='outlined' 
            label={descLabel}
            name='description' 
            size='small'
            spellCheck='true'
            autoWidth
            onChange={handleChange}
            onSelect={handleChange}
            />}
            />
        </Grid>
        <Grid item xs={3}>
          <TextField id='amount' 
            label={amountLabel}
            variant='outlined' 
            name='amount' 
            type='number'
            size='small'
            autoWidth
            onChange={handleChange}
            onSelect={handleChange}
            />
        </Grid>
        {/* don't need this for income */}
        { itemState.category !== 'Income' ? 
        <Grid item xs={4}>
          <Autocomplete
          id='type'
          disableClearable
          disablePortal
          options={['Budget','Expense']}
          defaultValue='Budget'
          size='small'
          renderInput={(params) => <TextField {...params} 
          variant='outlined' 
          label='Item Type' 
          name='type' 
          size='small'
          autoWidth
          onChange={handleChange}
          onSelect={handleChange}
          />}
          />
        </Grid>
        :<></>}
        {/* modify layout for Debt */}
        <Box sx={{paddingTop:1,
                display: 'inline-grid',
                gap:0,
                width:'100%',
                gridTemplateColumns: 'repeat(3, 1fr)',}}>
        {itemState.category === 'Debt' ?
          <>
              <TextField id='total' 
                label='Total Due $' 
                variant='outlined' 
                name='debtTotal' 
                type='number'
                
                size='small'
                autoWidth
                onChange={handleChange}
                onSelect={handleChange}
                />
              {/* </Grid>  */}
              {/* <Grid item xs={3} sx={{paddingTop:1}}> */}
                <TextField id='interest'
                  label='% Interest' 
                  variant='outlined' 
                  name='interest' 
                  type='number'
                  
                  size='small'
                  autoWidth
                  onChange={handleChange}
                  onSelect={handleChange}
                  />
              
            
          </> 
          : <></>}
          { itemState.category !== 'Income' ? 
            <Grid item xs={12} >
              <TextField id='startDate'
              helperText='Pay or Due Date' 
              variant='outlined' 
              name='startDate' 
              type='date'
              fullWidth
              defaultValue={itemState.startDate}
              size='small'
              onChange={handleChange}
              onSelect={handleChange}
              />
              
            </Grid>
            :<></>}
            </Box>
          <Grid item xs={1} sx={{paddingTop:'2px'}} >
            <Button variant='contained' color='success' sx={{ display:'flex'}} onClick={handleAddItem}>Add</Button>
          </Grid>
      </Grid>
      <p style={{color: 'red'}}>{errorMsg}</p>
    </form>
  );
}

