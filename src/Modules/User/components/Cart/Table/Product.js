import { Grid } from '@mui/material';
import { Bold, Subtitle, Text } from '@tremor/react';
import React from 'react'

function Product({productInfo}) {
  console.log(productInfo,"productInfo");
  return (
    <div>
      <Grid
        container
        justifyContent={"flex-start"}
        alignItems={"center"}
        columnGap={1}
      >
        <Grid className="product-category-itemOne-image" item xs={3}>
          <img
            className=""
            src={
              "https://static.utmel.com/80dimg/triadmagnetics-wau24750-9576.jpg"
            }
            alt="loading"
          />
        </Grid>
        <Grid className="product-category-itemTwo-image" item xs={5}>
          <Grid container rowGap={1}>
            <Grid item xs={12}>
              <Text>
                <Bold>{productInfo.mfrno}</Bold>
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Subtitle>{productInfo.title}</Subtitle>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Product