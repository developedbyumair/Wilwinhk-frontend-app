import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BoxOne from "./subcomponents/BoxOne";
import { Card, Metric } from "@tremor/react";
import { FetchAllProducts } from "../../../../../../Store/API/fetchProducts";
function Index() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [productsOne, setProductsOne] = useState([]);
  const [productsTwo, setProductsTwo] = useState([]);
  // console.log(windowWidth, "windowWidth");
  useEffect(() => {
    const handleWindowResize = () => {
      // setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    const filter = async () => {
      try {
        const res = await FetchAllProducts();
        console.log(res, "res to fetch all 1");
        if (res.length >= 10) {
          let filteredata = res.slice(0, 8);
          console.log(filteredata, "filteredata");
          setProductsOne(filteredata);
        }
        if (res.length >= 20) {
          let filteredata = res.slice(8, 16);
          setProductsTwo(filteredata);
        }
      } catch (error) {
        console.log(error);
      }
    };
    filter();
  }, []);
  return (
    <Grid container className="preferental-container">
      <Grid sx={{ m: "0px 0px 10px 0px" }} item xs={12}>
        <Metric>PREFERENTIAL ZONE</Metric>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          className=""
          alignItems={"center"}
          rowGap={2}
          justifyContent={"space-between"}
        >
          <Grid
            item
            className="ring-gray-200 ring-1 shadow rounded-lg bg-white border-blue-500"
            xs={12}
            lg={5.95}
            xl={5.95}
          >
            {productsOne.length !== 0 && (
              <BoxOne
                dataCards={productsOne}
                img={
                  "https://res.utmel.com/Images/Conver/984cfd26-4f15-4f3a-80f7-b23c82989c51.png"
                }
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            lg={5.95}
            xl={5.95}
            className="ring-gray-200 ring-1 shadow rounded-lg bg-white border-blue-500"
          >
            {/* <Card> */}
            <BoxOne
              dataCards={productsTwo}
              img={
                "https://res.utmel.com/Images/Conver/d84bd67f-04da-43f8-ae95-d99710787413.png"
              }
            />
            {/* </Card> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Index;
