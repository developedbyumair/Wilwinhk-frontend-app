import { Grid } from '@mui/material';
import React from 'react'
import Cards from './Cards';

function BoxTwo() {
  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Cards />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BoxTwo