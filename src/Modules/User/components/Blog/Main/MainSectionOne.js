import { Grid, IconButton, Typography } from "@mui/material";
import { Subtitle, Text, Title } from "@tremor/react";
import React, { useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CardBlogs } from "../../../../../common";
function MainSectionOne() {

  return (
    <div>
      <Grid
        className="main-section"
        justifyContent={"center"}
        alignItems={"flex-start"}
        container
        gap={1}
      >
        <Grid className="itemOne" item xs={5.8} md={12} lg={5.8}>
          <CardBlogs />
          <CardBlogs />
          <CardBlogs />
          <CardBlogs />
        </Grid>
        <Grid item className="itemTwo" xs={6} lg={6}>
          {

          }
          <Grid container className="itemTwo-container">
            <Grid item className="container-itemone" xs={12}>
              <img
                src="https://res.utmel.com/Images/Article/0fe7d1b6-ff4e-4564-b20b-161159047fee.png"
                alt="loading..."
              />
            </Grid>
            <Grid item className="container-itemtwo" xs={9}>
              <Title className="color cut-text">Title</Title>
              <div className="item">
                <Subtitle>
                  <Text className="color">Date</Text>
                </Subtitle>
                <div className="info">
                  <IconButton className="color">
                    <VisibilityIcon />
                  </IconButton>
                  <Subtitle>
                    <Text className="color">1234</Text>
                  </Subtitle>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainSectionOne;
{/* <Grid item className="container-itemone" xs={12}>
              <img
                src="https://res.utmel.com/Images/Article/0fe7d1b6-ff4e-4564-b20b-161159047fee.png"
                alt="loading"
              />
            </Grid>
            <Grid item className="container-itemtwo" xs={12}>
              <div className="info">
                <Title>Title</Title>
                <Typography variant="subtitle1">02 January 2023</Typography>
                <div className="item">
                  <VisibilityIcon />
                  <Typography variant="subtitle1">20234</Typography>
                </div>
              </div>
            </Grid> */}