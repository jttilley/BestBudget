import * as React from 'react';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { personalCategories } from '../utils/allCategories';

const itemStyling = styled(Paper)(({ theme }) => ({
  paddingLeft: theme.spacing(5),
}));

export default function AddBudgetItem() {
  return (
    <div>
      <Grid container>
        <Grid itemStyling xs={4}>
          <Autocomplete
            // disablePortal
            id="itemDesc"
            options={personalCategories[2].subCategories.map((option) => option)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} variant="standard" label="Budget Item" />}
          />
        </Grid>
        <Grid xs = {2}>
          <TextField sx={{ width: 150 }} id="amount" label="Amount" variant="standard" />
        </Grid>

      </Grid>
    </div>
  );
}
