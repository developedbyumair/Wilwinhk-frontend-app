import React from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import { Grid } from "@mui/material";
import { rightBarData } from "../../../../../../Utility/Home/Banner";
import Sliders from "./Slider";
function index() {
  return (
    <div className="banner-container">
      <Grid container gap={1} className="banner-container-box">
        <Grid item xs={2.6} className="banner-boxOne">
          <Leftbar />
        </Grid>
        <Grid item xs={6.6} className="banner-boxTwo">
          {/* <div className="border banner-boxTwoItem"> */}
          <Sliders />
          {/* </div> */}
        </Grid>
        <Grid item xs={2.6} className="banner-boxThree">
          {rightBarData.map((e, i) => {
            return (
              <Rightbar key={i} url={e.url} heading={e.heading} img={e.img} />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default index;
