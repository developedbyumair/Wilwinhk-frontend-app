import { Grid } from '@mui/material'
import React from 'react'

function index() {
  return (
    <div className="bannerDown">
      <Grid container className="bannerDown-container">
        <Grid item xs={3}>
          <div className="bannerDown-items">
            <img
              src="https://www.utmel.com/imgs/index/cost.png"
              alt="loading"
            />
            <span>Help you to save your cost and time.</span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="bannerDown-items">
            <img
              src="https://www.utmel.com/imgs/index/package.png"
              alt="loading"
            />
            <span>Reliable package for your goods.</span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="bannerDown-items">
            <img
              src="https://www.utmel.com/imgs/index/fast.png"
              alt="loading"
            />
            <span>Fast Reliable Delivery to save time.</span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="bannerDown-items">
            <img
              src="https://www.utmel.com/imgs/index/service.png"
              alt="loading"
            />
            <span>Quality premium after-sale service.</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default index