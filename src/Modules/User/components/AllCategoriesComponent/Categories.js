import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Leftbar from "./Leftbar/Leftbar";
import Main from "./Main/Main";
import Breadscrumbs from "../../../../common/Breadcrumbs/Breadcrumbs";
import numeral from "numeral";
import { Numeral } from "react-numeral";
import { Metric } from "@tremor/react";
function AllCategories() {
  const [Categ, setCateg] = useState();
  const [amount, setamount] = useState(0);
  let formatValue = (value) => value.toFixed(2);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth, "windowWidth");
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={1}>
      <Grid item xs={11.6}>
        <Breadscrumbs />
      </Grid>
      <Grid item xs={11.5}>
        <Typography variant="h5">
          All Categories
          {/* <Numeral value={amount} format={"0,0"} /> */}
        </Typography>
      </Grid>
      <Grid item xs={11.5}>
        {windowWidth >= 1024 ? (
          <Grid container gap={1}>
            <Grid item xs={2.9}>
              <Leftbar setCateg={setCateg} />
            </Grid>
            {Categ && (
              <Grid item xs={9}>
                <Main setamount={setamount} Categ={Categ} />
              </Grid>
            )}
          </Grid>
        ) : (
          <Grid container gap={1}>
            {Categ && (
              <Grid item xs={11.5}>
                <Main setamount={setamount} Categ={Categ} />
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default AllCategories;
