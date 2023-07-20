import { Grid } from '@mui/material'
import React from 'react'

function Price() {
  return (
    <Grid contianer className='' sx={{height:"100%"}} rowGap={5}>
      <Grid item sx={{p:"0px 0px 3px 0px"}} xs={12}>
        <span>Unit Price: 26.200000</span>
      </Grid>
      <Grid item sx={{p:"3px 0px 0px 0px"}} xs={12}>
        <span>Ext Price: 26.20</span>
      </Grid>
    </Grid>
  );
}

export default Price