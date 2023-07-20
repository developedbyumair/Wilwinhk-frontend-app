import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Metric } from "@tremor/react";
import TableCom from "./TableCom";
import { useSelector } from "react-redux";
function Compare() {
  const compare = useSelector(state=>state.compare.compare)
  // console.log(compare,"compare");
  useEffect(() => {
    const fetchData = () =>{

    }
    fetchData();
  }, [])
  
  return (
    <div>
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <Metric>Compare Page</Metric>
        </Grid>
        <Grid item xs={12}>
          <TableCom compares={compare} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Compare;
