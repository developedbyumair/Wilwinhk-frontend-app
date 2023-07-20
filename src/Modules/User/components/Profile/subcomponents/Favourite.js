import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { Tables } from '../../../../../common';
import {useSelector} from "react-redux"
import { HeadingOfTables } from '../../../../../Utility/Categories/Categories';
function Favourite() {
  const fav = useSelector(state=>state.fav)
  console.log(fav,"fav");
  useEffect(() => {
    // const fetch =
  }, [])
  
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Tables tableData={fav.productsFav} columns={HeadingOfTables} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Favourite