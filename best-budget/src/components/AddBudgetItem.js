import * as React from 'react';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import { personalCategories } from '../utils/allCategories';
import { Button } from '@mui/material';


// const itemStyling = styled(Paper)(({ theme }) => ({
//   paddingLeft: theme.spacing(5),
// }));

  let itemId;
  let amountId;
  let typeId;

export default function AddBudgetItem({ category }) {
  itemId = `${category}_itemDesc`;
  // console.log("🚀 ~ file: AddBudgetItem.js ~ line 22 ~ AddBudgetItem ~ itemId", itemId)
  amountId = `${category}_amount`;
  // console.log("🚀 ~ file: AddBudgetItem.js ~ line 24 ~ AddBudgetItem ~ amountId", amountId)
  typeId = `${category}_type`;
  // console.log("🚀 ~ file: AddBudgetItem.js ~ line 26 ~ AddBudgetItem ~ typeId", typeId)
  
  const [itemState, setItemState] = React.useState({description: '', amount: '', type: 'Budget' });


  const handleChange = (e) => {
    const {name, value} = e.target;
    // if (value === undefined) value = e.target.value;
    setItemState({
      ...itemState,
      [name]: value,
    });
    // console.log(itemState);
  }

  const AddItem = () => {
    const {description, amount, type} = itemState;
    
    alert("I'm adding the item " + description + " for " + amount + " as a " + type + " item.");

  }

  return (
    <div>
      <Grid container sx={{ padding: 0 }}>
        <Grid itemStyling xs={3}>
          <Autocomplete
            disablePortal
            freeSolo
            id={itemId}
            options={personalCategories[2].subCategories.map((option) => option)}
            renderInput={(params) => <TextField {...params} 
                                      variant="outlined" 
                                      label="Item Description" 
                                      name="description" 
                                      onChange={handleChange}
                                      onSelect={handleChange}
                                    />}
          />
        </Grid>
        <Grid xs={3}>
          <TextField id={amountId} label="$ Amount" variant="outlined" name="amount" onChange={handleChange}/>
        </Grid>
        <Grid xs={3}>
          <Autocomplete
          id={typeId}
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
        <Grid xs={3}>
          <Button variant="contained" color="success" sx={{ display:"flex",  width: 100, height:55 }} onClick={AddItem}>Add</Button>
        </Grid>
      </Grid>
    </div>
  );
}

