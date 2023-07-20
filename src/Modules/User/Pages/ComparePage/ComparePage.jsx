import React from "react";
import { Navbar, Compare, Footer, Drawer } from "../../components";
import { Grid } from "@mui/material";
import { Card } from "@tremor/react";

function ComparePage() {
  return (
    <div>
      <Grid
        container
        rowGap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={11.5}>
          <Card>
            <Compare />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Drawer />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default ComparePage;
