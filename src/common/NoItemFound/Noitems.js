import { Grid } from "@mui/material";
import { Card, Metric } from "@tremor/react";
import React from "react";

function Noitems() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={11.5}></Grid>
      <Card>
        <Metric style={{margin:"auto"}}>No Items Found</Metric>
      </Card>
    </Grid>
  );
}

export default Noitems;
