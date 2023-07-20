import { Grid } from '@mui/material'
import React from 'react'

function index() {
  return (
    <div className="certifications-section">
      <Grid container rowSpacing={4} justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif01.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif02.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif03.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif04.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif05.png"
                alt="loading"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='' justifyContent={"center"} alignItems={"center"}>
            <Grid className='' item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif06.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif07.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={2}>
              <img
                src="https://www.utmel.com/imgs/certification/certif08.png"
                alt="loading"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default index