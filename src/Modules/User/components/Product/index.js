import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Info from './subcomponents/InfoSection/Info'
import SecondSection from './subcomponents/SecondSection'
import ThirdSection from "./subcomponents/ThirdSection";
import FourthSection from "./subcomponents/FouthSection/index";
import FifthSection from "./subcomponents/FifthSection";
import { Breadcrumbs } from '../../../../common';

function ProductInfo() {
  const [Product, setProduct] = useState({})
  return (
    <div className="productInfo">
      <div className="productInfo-container">
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <Breadcrumbs />
          </Grid>
          <Grid item xs={12}>
            <Info Product={Product} setProduct={setProduct} />
          </Grid>
          <Grid item xs={12}>
            <SecondSection />
          </Grid>
          <Grid item xs={12}>
            <ThirdSection Product={Product} />
          </Grid>
          <Grid item xs={12}>
            <FourthSection Product={Product} />
          </Grid>
          <Grid item xs={12}>
            <FifthSection Product={Product} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ProductInfo;