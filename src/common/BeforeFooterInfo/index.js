import React from 'react'
import { Grid } from "@mui/material";
// import   {makeStyles} from "@mui/styles";
// const useStyles  = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     [theme.breakpoints.up('md')]: {
//       justifyContent: 'space-between',
//     },
//   },
// }));
function BeforeFooter() {
  // const classes = useStyles();
  return (
    <div className="beforeFooter">
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        className="beforeFooter-container"
      >
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          sx={12}
          xs={12}
          className="beforeFooter-item"
        >
          <Grid container justifyContent={"center"}>
            <Grid item xs={2} className="">
              <img
                src="https://www.utmel.com/imgs/footer/daily.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={8} className="dividerVertical">
              <Grid container>
                <Grid item xs={12}>
                  <strong>10000 +</strong>
                </Grid>
                <Grid item xs={12}>
                  <span> Daily Order Quantity</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          sx={12}
          xs={12}
          className="beforeFooter-item"
        >
          <Grid container justifyContent={"center"}>
            <Grid item xs={2} className="">
              <img
                src="https://www.utmel.com/imgs/footer/alternative.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={8} className="dividerVertical">
              <Grid container>
                <Grid item xs={12}>
                  <strong>10000 +</strong>
                </Grid>
                <Grid item xs={12}>
                  <span>Alternative Parts</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          sx={12}
          xs={12}
          className="beforeFooter-item"
        >
          <Grid container justifyContent={"center"}>
            <Grid item xs={2} className="">
              <img
                src="https://www.utmel.com/imgs/footer/worldwide.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={9} className="dividerVertical">
              <Grid container>
                <Grid item xs={12}>
                  <strong>10000 +</strong>
                </Grid>
                <Grid item xs={12}>
                  <span>Worldwide Manfacturers</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          sx={12}
          xs={12}
          className="beforeFooter-item"
        >
          <Grid container justifyContent={"center"} className="">
            <Grid item xs={2} className="">
              <img
                src="https://www.utmel.com/imgs/footer/in-stock.png"
                alt="loading"
              />
            </Grid>
            <Grid item xs={10} className="">
              <Grid container>
                <Grid item xs={12}>
                  <strong>10000 +</strong>
                </Grid>
                <Grid item xs={12}>
                  <span>In Stock Warehouse</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BeforeFooter;