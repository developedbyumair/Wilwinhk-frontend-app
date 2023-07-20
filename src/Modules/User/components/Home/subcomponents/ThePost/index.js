import { Grid } from '@mui/material'
import React from 'react'
import Cards from './Cards';
import { Metric } from '@tremor/react';

function index() {
  return (
    <div className="home-post">
      <Grid container className="home-post-container">
        <Grid sx={{m:"0px 0px 10px 0px"}} item xs={12}>
          <Metric>The Post</Metric>
        </Grid>
        <Grid item sx={12}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={1}
            rowGap={1}
          >
            <Grid item md={5.9} lg={5.9} xl={5.9}>
              <Cards />
            </Grid>
            <Grid item md={5.9} lg={5.9} xl={5.9}>
              <Cards />
            </Grid>
            <Grid item md={5.9} lg={5.9} xl={5.9}>
              <Cards />
            </Grid>
            <Grid item md={5.9} lg={5.9} xl={5.9}>
              <Cards />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default index