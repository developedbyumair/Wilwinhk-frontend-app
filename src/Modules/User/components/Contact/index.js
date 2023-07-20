import React from 'react'
import Banner from './Banner'
import SectionOne from "./SectionOne"
import SectionTwo from './SectionTwo'
import { BeforeFooterInfo, Breadcrumbs } from '../../../../common'
import { Grid } from '@mui/material'

function index() {
  return (
    <div>
      <Grid container rowGap={2}>
        <Grid item className="breadcrumbs-spacing" xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <SectionOne />
        </Grid>
        <Grid item xs={12}>
          <SectionTwo />
        </Grid>
        <Grid item xs={12}>
          <BeforeFooterInfo />
        </Grid>
      </Grid>
    </div>
  );
}

export default index