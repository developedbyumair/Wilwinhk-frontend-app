import { Divider, Grid, IconButton, Typography } from '@mui/material'
import { Subtitle, Text, Title } from '@tremor/react'
import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
function CardBlogs() {
  return (
    <div>
      <Grid container className="cardBlogs" rowGap={1} columnGap={3}>
        <Grid item className="item1" xs={2.9}>
          <img
            src="https://res.utmel.com/Images/Article/bb67d87a-0636-42c5-9634-c01780f4b212.jpg"
            alt="loading...."
          />
        </Grid>
        <Grid item className="item2" xs={8}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            className="container"
          >
            <Grid item className="itemone" xs={12}>
              <Title>Title</Title>
            </Grid>
            <Grid item className="itemtwo" xs={12}>
              <Subtitle>
                <Text>23 may 2023</Text>
              </Subtitle>
              <div className="itemtwo-info">
                <Subtitle>
                  <Text>2348</Text>
                </Subtitle>
                <IconButton>
                <VisibilityIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="item3" item xs={12}>
          <Divider></Divider>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardBlogs