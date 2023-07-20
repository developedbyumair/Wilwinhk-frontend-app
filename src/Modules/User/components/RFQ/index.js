import React from 'react'
import {Card, Grid} from "@mui/material"
import Quote from './Quote/Quote'
import { BeforeFooterInfo, Breadcrumbs } from '../../../../common';
function index() {
  return (
    <Grid container className="rfq-container" rowGap={2}>
      <Grid item xs={12} className="breadcrumbs-spacing">
        <Breadcrumbs />
      </Grid>
      <Grid item xs={12}>
        <Card className="rfq-container-itemTwo">
          <Quote />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <BeforeFooterInfo />
      </Grid>
    </Grid>
  );
}

export default index