import React from 'react'
import Banner from "./Banner/index"
import SectionOne from "./SectionOne/index";
import { BeforeFooterInfo, Breadcrumbs } from '../../../../common';
import { Grid } from '@mui/material';
import Breadscrumbs from '../../../../common/Breadcrumbs/Breadcrumbs';
function index() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} rowGap={6}>
    <Grid item xs={11.5}>
      <Breadscrumbs />
    </Grid>
    <Grid item xs={12}>
      <Banner />
    </Grid>
    <Grid item xs={12}>
      <SectionOne />
    </Grid>
    <Grid item xs={12}>
      <BeforeFooterInfo />
    </Grid>
    </Grid>
  );
}

export default index