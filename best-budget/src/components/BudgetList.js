import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';

export default function BudgetList({theList}) {
  return (
    <Grid container sx={{padding: 0}}>
      { theList.map((itm, idx) => {
        // console.log("idx", idx);
        // console.log("itm", itm);
        let gridId = "grid" + idx;
        let paperId = "paper"+ idx;

        return(
        <Grid item key={gridId} sx={{paddingTop: 1, paddingRight: 1, textAlign: 'right'}} xs={12}>
          <Paper key={paperId}>{itm.name} - ${itm.amount} </Paper>
        </Grid>
      )})}
    </Grid>
)};