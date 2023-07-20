import { Grid } from "@mui/material";
import React from "react";

function index({ dataCards }) {
  return (
    <div className="productCards">
      <Grid className="productCards-container" container>
        <Grid item className="productCards-itemOne" xs={12}>
          <img
            src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
            alt="loading"
          />
        </Grid>
        <Grid item className="productCards-itemTwo" xs={12}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid className="productCards-itemTwo-p" item xs={10}>
              <p>{dataCards?.mfrNo ? dataCards.mfrNo : "-"}</p>
            </Grid>
            <Grid className="productCards-itemTwo-name" item xs={12}>
              <span>{dataCards?.mfr ? dataCards.mfr : "-"}</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default index;
