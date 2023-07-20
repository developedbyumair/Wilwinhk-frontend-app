import { Grid, Pagination } from "@mui/material";
import React from "react";
import MainSectiontwo from "./Main/MainSectiontwo";
function MainProject({ DataSet }) {
  return (
    <div>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <MainSectiontwo DataSet={DataSet} />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainProject;
