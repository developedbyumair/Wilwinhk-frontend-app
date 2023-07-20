import { Grid } from '@mui/material'
import React from 'react'

function index() {
  const array = [
    "https://www.utmel.com/imgs/detail/Certif02.png",
    "https://www.utmel.com/imgs/detail/Certif03.png",
    "https://www.utmel.com/imgs/detail/Certif04.png",
    "https://www.utmel.com/imgs/detail/Certif05.png",
    "https://www.utmel.com/imgs/detail/Certif06.png",
    "https://www.utmel.com/imgs/detail/Certif07.png",
    "https://www.utmel.com/imgs/detail/Certif08.png",
  ]
  return (
    <Grid container columnGap={1} rowGap={1} justifyContent={"center"} alignItems={"center"} className='sectionTwo-productPage'>
    {
      array.map((e,i)=>{
      return ( 
        <Grid
          key={i}
          item
          className='items'
          xl={1.6}
          lg={1.6}
          md={1.6}
          sm={2.5}
          xs={3}
        >
          <img src={e} alt="loading" />
        </Grid>
      );
      })
    }
    </Grid>
  );
}

export default index;