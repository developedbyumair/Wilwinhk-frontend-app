import { Grid, Typography } from "@mui/material";
import React from "react";
import TabsFifthSection from "./TabsFifthSection";
import FeedIcon from "@mui/icons-material/Feed";
function index({ Product }) {
  return (
    <Grid container className="fifth-productinfo">
      <Grid
        sx={{ margin: "10px 0px 0px 0px" }}
        item
        xs={12}
        className="fifth-productinfo-item"
      >
        <FeedIcon color="primary" />
        <Typography variant="h6">{Product?.mfrNo} Relevant information</Typography>
      </Grid>
      <Grid item xs={12}>
        <TabsFifthSection />
      </Grid>
    </Grid>
  );
}

export default index;
