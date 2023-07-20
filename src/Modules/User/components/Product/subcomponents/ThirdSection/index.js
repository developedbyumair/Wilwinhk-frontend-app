import { Grid, Typography } from '@mui/material'
import React from 'react'
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import Tabspart from './Tabspart';
function index() {
  return (
    <Grid container className="thirdSection-product">
      <Grid item sx={{margin:"10px 0px 0px 0px"}} xs={12} className="thirdSection-product-itemOne">
        <ContentPasteSearchIcon color='primary' />
        <Typography variant='h6'>User Guide</Typography>
      </Grid>
      <Grid item xs={12}>
        <Tabspart />
      </Grid>
    </Grid>
  );
}

export default index