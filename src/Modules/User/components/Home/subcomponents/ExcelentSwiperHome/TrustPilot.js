import { Grid } from '@mui/material';
import React from 'react'

function TrustPilot() {
  return (
    <Grid container rowGap={1} className="trustPilot">
      <Grid item xs={12}>
        <h1>Excellent</h1>
      </Grid>
      <Grid item xs={12} className="trustPilot-itemOne">
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
          alt="loading"
        />
      </Grid>
      <Grid item xs={12} className="trustPilot-itemTwo">
        <span>Based on 101 reviews</span>
      </Grid>
      <Grid item xs={12} className="trustPilot-itemThree">
        <img
          src="https://www.seekpng.com/png/detail/48-481390_trustpilot-logo-trustpilot-logo-png.png"
          alt="loading"
          className="Trustpilot-logo"
        />
      </Grid>
    </Grid>
  );
}

export default TrustPilot