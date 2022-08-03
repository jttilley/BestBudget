import * as React from 'react';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import BudgetContext from '../utils/BudgetContext';


// const itemStyling = styled(Paper)(({ theme }) => ({
//   paddingLeft: theme.spacing(5),
// }));

export default function AddBudgetItem({ category, subCategories }) {
  const { addItem } = React.useContext(BudgetContext);

  const itemId = `${category}_itemDesc`;
  const amountId = `${category}_amount`;
  const typeId = `${category}_type`;
  
  const [itemState, setItemState] = React.useState({ description: '', amount: '', type: 'Budget', debtTotal: '' });

  let descLabel = 'Item Description'
  let amountLabel = 'Pay $'

  //change description label for income
  if (category === 'Income') {
    descLabel = 'Income Type'
    amountLabel = 'Paid $'
  }

  //for local changes to inputs
  const handleChange = (e) => {
    const {name, value} = e.target;
    // console.log("🚀 ~ file: AddBudgetItem.js ~ line 37 ~ handleChange ~ value", value)
    // console.log("🚀 ~ file: AddBudgetItem.js ~ line 37 ~ handleChange ~ name", name)
    // console.log("e.target",e.target)
    // if (value === undefined) value = e.target.value;

    setItemState({
      ...itemState,
      [name]: value,
    });
    // console.log(itemState);
  }

  const handleAddItem = (e) => {
    console.log("🚀 ~ file: AddBudgetItem.js ~ line 52 ~ handleAddItem ~ itemState", itemState)
    
    const {description, amount, type, debtTotal} = itemState;
    if (category === 'Debt') {
      alert("I'm adding the item " + description + " for " + amount + " as a " + type + " item. Total Debt: " + debtTotal);
    } else alert("I'm adding the item " + description + " for " + amount + " as a " + type + " item.");

    addItem(description,amount,type,category,debtTotal)

  }
  
  return (
    <div>
      <Grid container sx={{ padding: 0 }}>
        <Grid item xs={5}>
          <Autocomplete
            disablePortal
            freeSolo
            id={itemId}
            options={subCategories.map((option) => option)}
            renderInput={(params) => <TextField {...params} 
                                      variant="outlined" 
                                      label={descLabel}
                                      name="description" 
                                      size='small'
                                      spellCheck="true"
                                      onChange={handleChange}
                                      onSelect={handleChange}
                                    />}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField id={amountId} 
            label={amountLabel}
            variant="outlined" 
            name="amount" 
            type="number"
            size='small'
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
          options={["Budget","Expense"]}
          defaultValue={"Budget"}
          size='small'
          renderInput={(params) => <TextField {...params} 
                                    variant="outlined" 
                                    label="Item Type" 
                                    name="type" 
                                    size='small'
                                    onChange={handleChange}
                                    onSelect={handleChange}
                                  />}
          />
        </Grid>
        :<></>}
        {/* modify layout for Debt */}
        {category === 'Debt' ?
          <>
            <Grid item xs={5} sx={{paddingTop:1}}>
              <TextField id='Debt_total' 
                label="Debt Total $" 
                variant="outlined" 
                name="debtTotal" 
                type="number"
                fullWidth
                size='small'
                onChange={handleChange}
                onSelect={handleChange}
              />
              </Grid>
              <Grid item xs={1} sx={{paddingTop: '9px', paddingLeft:1}} >
              <Button variant="contained" color="success" sx={{ display:"flex"}} onClick={handleAddItem}>Add</Button>
            </Grid>
          </> 
      : 
        <Grid item xs={1} sx={{paddingTop:'2px'}} >
          <Button variant="contained" color="success" sx={{ display:"flex"}} onClick={handleAddItem}>Add</Button>
        </Grid>
      }
      </Grid>
    </div>
  );
}

