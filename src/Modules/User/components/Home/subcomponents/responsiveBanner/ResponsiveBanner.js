import { Grid } from "@mui/material";
import { Card, Title } from "@tremor/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function ResponsiveBanner() {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={11.5}>
          <Card>
            <Grid container justifyContent={"flex-start"} alignItems={"center"}>
              <Grid item xs={5.9} sm={3.9} md={2} lg={2}>
                <Grid
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/categories");
                  }}
                  container
                >
                  <Grid item xs={12}>
                    <img
                      src="https://www.utmel.com/imgs/index/P.png"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Title>Product</Title>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={3.9} md={2} lg={2}>
                <Grid
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/categories");
                  }}
                  container
                >
                  <Grid item xs={12}>
                    <img
                      src="https://www.utmel.com/imgs/index/B.png"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Title>Brand</Title>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={3.9} md={2} lg={2}>
                <Grid
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/rfq");
                  }}
                  container
                >
                  <Grid item xs={12}>
                    <img
                      src="https://www.utmel.com/imgs/index/R.png"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Title>RFQ</Title>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={3.9} md={2} lg={2}>
                {" "}
                <Grid
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/blog");
                  }}
                  container
                >
                  <Grid item xs={12}>
                    <img
                      src="https://www.utmel.com/imgs/index/A.png"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Title>Articals</Title>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={3.9} md={2} lg={2}>
                <Grid
                  container
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/contact");
                  }}
                >
                  <Grid item xs={12}>
                    <img
                      src="https://www.utmel.com/imgs/index/C.png"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Title>Contact</Title>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResponsiveBanner;
