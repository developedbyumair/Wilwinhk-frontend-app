import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { Grid } from "@mui/material";
import React from "react";
function Cards() {
  return (
    <Grid container className="home-blog-container-Card">
      <Grid className="home-blog-Card-sectionOne" item xs={12}>
        <span>17 March 2023</span>
        <TurnedInIcon sx={{color:" #fea531"}} />
      </Grid>
      <Grid item xs={12} className="home-blog-Card-sectionTwo">
        <p>The Rapid Design of Active Filters</p>
      </Grid>
      <Grid item xs={12} className="home-blog-Card-sectionThree">
        <img
          src="https://res.utmel.com/Images/Article/8d268961-e3b0-475c-8e38-946762345a97.png"
          alt="loading"
        />
      </Grid>
    </Grid>
  );
}

export default Cards;
