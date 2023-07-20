import { Grid } from '@mui/material'
import React from 'react'
import { Drawer, Footer, Manfacturer, Navbar } from '../../components'

function index() {
  return (
    <Grid container>
      <Grid xs={12}>
        <Navbar />
      </Grid>
      <Grid xs={12}>
        <Manfacturer />
      </Grid>
      <Grid xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default index