import { Grid } from '@mui/material'
import React from 'react'
import { ProductCards } from '../../../../../../common'

function TabOneFifthSection() {
  return (
    <div>
      <Grid container rowGap={1} columnGap={1}>
        <Grid item xs={3.9}>
          <ProductCards />
        </Grid>
        <Grid item xs={3.9}>
          <ProductCards />
        </Grid>
        <Grid item xs={3.9}>
          <ProductCards />
        </Grid>
        <Grid item xs={3.9}>
          <ProductCards />
        </Grid>
        <Grid item xs={3.9}>
          <ProductCards />
        </Grid>
        <Grid item xs={3.9}>
          <ProductCards />
        </Grid>
      </Grid>
    </div>
  );
}

export default TabOneFifthSection