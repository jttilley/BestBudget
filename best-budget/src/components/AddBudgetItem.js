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

export default function AddBudgetItem({ category }) {
  const itemId = `${category}_itemDesc`;
  const amountId = `${category}_amount`;

  return (
    <div>
      <Grid container sx={{ padding: 2 }}>
        <Grid itemStyling xs={5}>
          <Autocomplete
            // disablePortal
            freeSolo
            id={itemId}
            options={personalCategories[2].subCategories.map((option) => option)}
            
            renderInput={(params) => <TextField {...params} variant="outlined" label="Budget Item" />}
          />
        </Grid>
        <Grid xs={4}>
          <TextField id={amountId} label="Amount" variant="outlined" />
        </Grid>
        <Grid xs={3}>
          <Button variant="contained" color="success" sx={{ display:"flex", alignSelf: "flex-end", width: 100 }} onClick={AddItem}>Add</Button>
        </Grid>
      </Grid>
    </div>
  );
}

const AddItem = () => {
  alert("I'm adding the item");
}