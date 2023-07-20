import { Grid } from '@mui/material'
import React from 'react'

function TabThree() {
  return (
    <Grid container className="tabThree-fourthsection-productInfo">
      <Grid item xs={12} className="tabThree-fourthsection-productInfo-itemOne">
        <strong>DF13-3S-1.25C Overview</strong>
        <p>
          This product is packaged in a Receptacle cartonThis device's mounting
          type is Free Hanging (In-Line).An Bulk case is utilized for packaging
          the product.A product of the DF13 Series, it belongs to the range of
          products of that series.
        </p>
      </Grid>
      <Grid item xs={12} className="tabThree-fourthsection-productInfo-itemTwo">
        <strong>DF13-3S-1.25C Features</strong>
        <p>DF13 series</p>
      </Grid>
      <Grid
        item
        xs={12}
        className="tabThree-fourthsection-productInfo-itemThree"
      >
        <strong>DF13-3S-1.25C Applications</strong>
        <p>
          There are a lot of Hirose Electric Co Ltd DF13-3S-1.25C Rectangular
          Connectors applications.
        </p>
      </Grid>
      <Grid item xs={12} className="tabThree-fourthsection-productInfo-itemFour">
        <span>Measuring & Control Technology</span>
        <span>Data Technology</span>
        <span>Instrumentation</span>
        <span>Industrial Automation</span>
        <span>Energy efficient lighting (LED)</span>
        <span>Refrigeration control</span>
        <span>Medical technology</span>
        <span>Electrical substations</span>
        <span>Transportation</span>
        <span>Communication</span>
      </Grid>
    </Grid>
  );
}

export default TabThree