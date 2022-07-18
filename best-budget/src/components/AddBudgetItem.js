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
  
  const [itemState, setItemState] = React.useState({description: '', amount: '', type: 'Budget' });


  const handleChange = (e) => {
    const {name, value} = e.target;
    // console.log("e.target",e.target)
    // if (value === undefined) value = e.target.value;
    setItemState({
      ...itemState,
      [name]: value,
    });
    // console.log(itemState);
  }

  const handleAddItem = (e, category) => {
    const {description, amount, type} = itemState;
    
    alert("I'm adding the item " + description + " for " + amount + " as a " + type + " item.");

    addItem(description,amount,type,category)

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
                                      label="Item Description" 
                                      name="description" 
                                      spellCheck="true"
                                      onChange={handleChange}
                                      onSelect={handleChange}
                                    />}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField id={amountId} 
            label="$ Amount" 
            variant="outlined" 
            name="amount" 
            type="number"
            onChange={handleChange}
            onSelect={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
          id={typeId}
          disableClearable
          options={["Budget","Expense"]}
          defaultValue={"Budget"}
          renderInput={(params) => <TextField {...params} 
                                    
                                    variant="filled" 
                                    label="Item Type" 
                                    name="type" 
                                    onChange={handleChange}
                                    onSelect={handleChange}
                                  />}
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="success" sx={{ display:"flex"}} onClick={handleAddItem}>Add</Button>
        </Grid>
      </Grid>
    </div>
  );
}

