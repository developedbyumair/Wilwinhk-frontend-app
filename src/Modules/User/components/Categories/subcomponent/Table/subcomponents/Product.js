import { Grid } from '@mui/material'
import { Text } from '@tremor/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ id,img, title, manfacturer }) {
  const navigate = useNavigate();
  // console.log(img,"img");
  return (
    <Grid
      container
      justifyContent={"flex-start"}
      alignItems={"center"}
      columnGap={0}
    >
      <Grid className="product-category-itemOne-image" item xs={3}>
        {/* <img className="" src={img.url} alt="loading" /> */}
      </Grid>
      <Grid className="product-category-itemTwo-image" item xs={5}>
        <Grid container rowGap={1}>
          <Grid onClick={() => navigate(`/product/${id}`)} item xs={12}>
            <Text
              style={{ fontSize: "12px" }}
            >
              {manfacturer}
            </Text>
          </Grid>
          <Grid onClick={() => navigate(`/product/${id}`)} item xs={12}>
            <Text style={{ fontSize: "12px" }}>{title}</Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Product