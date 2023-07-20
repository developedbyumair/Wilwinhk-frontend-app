import { Grid } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { Metric } from "@tremor/react";
function index() {
    const array = [
      "https://res.utmel.com/Images/Article/8d268961-e3b0-475c-8e38-946762345a97.png",
      "https://res.utmel.com/Images/Article/8d268961-e3b0-475c-8e38-946762345a97.png",
      "https://res.utmel.com/Images/Article/8d268961-e3b0-475c-8e38-946762345a97.png",
      "https://res.utmel.com/Images/Article/8d268961-e3b0-475c-8e38-946762345a97.png",
    ];
  return (
    <div className="home-blog">
      <div className="home-blog-container">
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          className="home-blog-container-div"
        >
          <Grid sx={{m:"0px 0px 10px 0px"}} className="home-blog-container-div-itemOne" item xs={12}>
            <Metric>The Blog</Metric>
            <Link to={"/"}>
              <i> More +</i>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              columnGap={1}
              rowGap={1}
              className=""
            >
              {array.map((e, i) => {
                return (
                  <Grid item sm={5.9} md={5.9} lg={2.9} xl={2.9}>
                    <Cards img={e} key={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default index;
