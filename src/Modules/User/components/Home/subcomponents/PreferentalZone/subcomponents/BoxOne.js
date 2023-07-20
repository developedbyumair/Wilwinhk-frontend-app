import { Button, Grid } from "@mui/material";
import React from "react";
import Cards from "./Cards";

function BoxOne({ img, dataCards }) {
  console.log(dataCards, "dataCards");
  console.log(img, "img");
  return (
    <Grid className="preferential-boxOne-container" container>
      <Grid className="preferential-boxOne-itemOne" item xs={12}>
        <img src={img} alt="loading" />
      </Grid>
      <Grid className="preferential-boxOne-itemTwo" item xs={12}>
        {dataCards.length !== 0 ? (
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={1}
            columnGap={1}
            className="preferential-item-containerCard"
          >
            {dataCards.map((e) => {
              return (
                <Grid
                  item
                  xs={5.8}
                  sm={3.8}
                  md={2.8}
                  className="preferential-containerCard-item"
                >
                  <Cards dataMap={e} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={1}
            columnGap={1}
            className="preferential-item-containerCard"
          >
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={3.8}
              md={2.8}
              className="preferential-containerCard-item"
            >
              <Grid className="preferencial-card" container>
                <Grid item xs={12} className="preferencial-card-itemOne">
                  <img
                    src="https://static.utmel.com/80dimg/maximintegrated-max16813aupv-2591.jpg"
                    alt="loading"
                  />
                </Grid>
                <Grid className="preferencial-card-itemTwo" item xs={12}>
                  <span className="preferencial-card-itemTwo-span">SALE</span>
                  <strong>DS1305EN</strong>
                  <span className="preferencial-card-itemTwo-name">
                    maximintegrated
                  </span>
                  <Button
                    className="preferencial-card-itemTwo-btn"
                    variant="contained"
                    size="small"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default BoxOne;
