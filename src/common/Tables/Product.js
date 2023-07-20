import { Grid } from '@mui/material'
import { Subtitle } from '@tremor/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({data}) {
  console.log(data,"data");
  const navigate = useNavigate()
  return (
    <div>
      <Grid
        container
        justifyContent={"flex-start"}
        alignItems={"center"}
        columnGap={1}
      >
        <Grid item xs={3.5}>
          <img src={data.images[0].url} alt="loading" />
        </Grid>
        <Grid item xs={8}>
          <Subtitle>{data.mfrNo}</Subtitle>
          <Subtitle style={{cursor:"pointer"}} onClick={() => navigate(`/product/${data._id}`)}>{data.title}</Subtitle>
        </Grid>
      </Grid>
    </div>
  );
}

export default Product