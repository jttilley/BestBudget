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

export default function AddBudgetItemOld({ category, subCategories, id }) {
  const { addItem } = useContext(BudgetContext);
  const [errorMsg, setErrorMsg] = useState('');

  const itemId = `${category}_itemDesc`;
  const amountId = `${category}_amount`;
  const typeId = `${category}_type`;
  const interestId = `${category}_interest`;
  const dTotalId = `${category}_dtotal`;

  const [itemState, setItemState] = useState({ 
    description: '',
    amount: '', 
    type: 'Budget', 
    debtTotal: '', 
    interest: '', 
    startDate: null, 
  });

  let descLabel = 'Item Description'
  let amountLabel = 'Pay $'

  //change description label for income
  if (category === 'Income') {
    descLabel = 'Income Type'
    amountLabel = 'Paid $'
  }

  let startText = 'Due Date';

  //for local changes to inputs
  const handleChange = (e) => {
    const {name, value} = e.target;
    // console.log('e.target',e.target)
    // if (value === undefined) value = e.target.value;

    setItemState({
      ...itemState,
      [name]: value,
    });
    console.log('itemstate',itemState);
    console.log('category',category);
  }

  const handleAddItem = (e) => {
    
    const {description, amount, type, debtTotal, interest, startDate} = itemState;

    let missingInput = '';

    if (description === '') missingInput += 'Item Description, ';
    if (amount === '') missingInput += 'Pay, ';
    if (type !== 'Budget' && type !== 'Expense') missingInput += 'Item Type must be Budget or Expense'

    if (category === 'Debt') {
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

    addItem(description,amount,type,category,id,debtTotal,interest,startDate);
    
  }
  
  return (
    <form>
      <Grid container sx={{ padding: 0 }}>
        <Grid item xs={5}>
          <Autocomplete
            disablePortal
            freeSolo
            id={itemId}
            options={subCategories.map((option) => option)}
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
          <TextField id={amountId} 
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
        { category !== 'Income' ? 
        <Grid item xs={4}>
          <Autocomplete
          id={typeId}
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
        {category === 'Debt' ?
          <>
              <TextField id={dTotalId} 
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
                <TextField id={interestId}
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
          { category !== 'Income' ? 
            <Grid item xs={12} >
              <TextField id={`${category}_stdate`}
              helperText='Starting Payment Date' 
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

