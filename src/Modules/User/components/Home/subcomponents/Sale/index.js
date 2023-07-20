import React from 'react'
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleRight";
import {ProductCards} from "../../../../../../common";
import "react-multi-carousel/lib/styles.css";
import { Grid } from '@mui/material';
import { Metric } from '@tremor/react';
function index() {
  return (
    <div className="home-sale">
      <div className="home-sale-contain">
        <Metric style={{ margin: "0px 0px 10px 0px" }}>Hot Sale Parts</Metric>
        <Grid className="home-sale-container ring-gray-200 ring-1 shadow rounded-lg bg-white border-blue-500" container>
          <Grid item xs={3} className="home-sale-Firstcontainer-FirstItem">
            <img
              src="https://res.utmel.com/Images/Banners/home/67c69d7f-db55-498e-a8d8-97659561a529.png"
              alt="loading"
            />
          </Grid>
          <Grid className="" item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  justifyContent={"center"}
                  alignItems={"center"}
                  container
                  rowGap={1}
                  columnGap={1}
                >
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  rowGap={1}
                  columnGap={1}
                >
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                  <Grid item xs={2.9}>
                    <ProductCards />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ArrowCircleRightIcon className="home-sale-rightArrow" />
        <ArrowCircleLeftIcon className="home-sale-leftArrow" />
      </div>
    </div>
  );
}

export default index