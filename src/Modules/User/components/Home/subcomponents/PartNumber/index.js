import { Grid } from '@mui/material'
import React from 'react'
import TabHome from './TabHome';
import { Metric } from '@tremor/react';

function index() {
  return (
    <div className="partNumber">
      <Grid container className="partNumber-container">
        <Grid item xs={12}>
          <Metric>Part Number</Metric>
        </Grid>
        <Grid className="partNumber-container-itemTwo" item xs={18}>
          <TabHome />
        </Grid>
      </Grid>
    </div>
  );
}

export default index