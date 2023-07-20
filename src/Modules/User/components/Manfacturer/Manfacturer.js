import { Grid } from '@mui/material'
import React from 'react'
import { Breadcrumbs } from '../../../../common'
import ManfacturerTabs from './ManfacturerTabs'

function Manfacturer() {
  return (
    <Grid container gap={2} justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={11.5}><Breadcrumbs/></Grid>
        <Grid item xs={11.5}><ManfacturerTabs/></Grid>
        <Grid item xs={11.5}></Grid>
    </Grid>
  )
}

export default Manfacturer