import React from 'react'
import {Grid} from "@mui/material"
import TrustPilot from './TrustPilot'
import Swiper from './Swipers'
function index() {
  return (
    <div className="excellentHome-Swiper">
      <Grid container className="container">
        <Grid className="" item xs={3}>
          <TrustPilot />
        </Grid>
        <Grid className="" item xs={9}>
          <Swiper />
        </Grid>
      </Grid>
    </div>
  );
}

export default index