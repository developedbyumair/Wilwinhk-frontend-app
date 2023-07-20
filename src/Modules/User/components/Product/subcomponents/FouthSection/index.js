import { Grid, Typography } from '@mui/material'
import React from 'react'
import DescriptionIcon from "@mui/icons-material/Description";
import TabsFourthSection from './TabsFourthSection';
function Index({ Product }) {
  return (
    <Grid container className="fourthSection-product">
      <Grid
        sx={{ margin: "10px 0px 0px 0px" }}
        item
        xs={12}
        className="itemOne"
      >
        <DescriptionIcon color="primary" />
        <Typography variant="h6">{Product?.mfrNo} information</Typography>
      </Grid>
      <Grid item xs={12}>
        <TabsFourthSection Product={Product} />
      </Grid>
    </Grid>
  );
}

export default Index