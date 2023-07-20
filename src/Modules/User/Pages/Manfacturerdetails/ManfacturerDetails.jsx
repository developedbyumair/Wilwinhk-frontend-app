import React from "react";
import { Footer, Navbar } from "../../components";
import { Card, Metric } from "@tremor/react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
function ManfacturerDetails() {
  let { name } = useParams;
  console.log(name)
  return (
    <div>
      <Navbar />
      <Grid
        sx={{ m: "0px 0px 50px 0px" }}
        container
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={3}
      >
        <Grid item xs={11.5}>
          <Card>
            <Metric>{name}</Metric>
          </Card>
        </Grid>
        <Grid item xs={11.5}>
          <Card></Card>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default ManfacturerDetails;
