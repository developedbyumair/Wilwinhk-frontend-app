import { Grid } from '@mui/material'
import React from 'react'
import HeadingCategory from './subcomponent/Heading/HeadingCategory'
import { BeforeFooterInfo, Breadcrumbs } from '../../../../common'
import AnotherTable from './subcomponent/AnotherTable/AnotherTable'

function index() {
  return (
    <div>
        <Grid container justifyContent={"center"} alignItems={"center"} rowGap={2} >
            <Grid item xs={12} className='breadcrumbs-spacing'><Breadcrumbs /></Grid>
            <Grid item xs={11.5}><HeadingCategory/></Grid>
            <Grid item xs={11.5}><AnotherTable/></Grid>
            <Grid item xs={12}><BeforeFooterInfo/></Grid>
        </Grid>
    </div>
  ) 
}

export default index