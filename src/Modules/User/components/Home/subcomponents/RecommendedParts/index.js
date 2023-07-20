import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductCards } from "../../../../../../common";
import { Metric } from "@tremor/react";
import { FetchAllProducts } from "../../../../../../Store/API/fetchProducts";

function Index() {
  const [productsTwo, setProductsTwo] = useState([]);
  useEffect(() => {
    const filter = async () => {
      try {
        const res = await FetchAllProducts();
        if (res.data.length === 40) {
          let filteredata = res.data.slice(20, 32);
          setProductsTwo(filteredata);
        }
      } catch (error) {
        console.log(error);
      }
    };
    filter();
  }, []);
  return (
    <div className="recommendedParts">
      <Grid container className="recommendedParts-container">
        <Grid sx={{ m: "0px 0px 10px 0px" }} item xs={12}>
          <Metric>Recommended Parts</Metric>
        </Grid>
        <Grid
          className="ring-gray-200 ring-1 shadow rounded-lg bg-white border-blue-500"
          item
          xs={12}
        >
          {productsTwo.length !== 0 ? (
            <Grid
              className="recommendedParts-itemTwo-container"
              container
              columnGap={1.2}
              rowGap={1.2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {productsTwo.map((e) => {
                return (
                  <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                    <ProductCards dataCards={e} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid
              className="recommendedParts-itemTwo-container"
              container
              columnGap={1.2}
              rowGap={1.2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5.9} sm={5.9} md={2.9} lg={1.9}>
                <Grid className="productCards-container" container>
                  <Grid item className="productCards-itemOne" xs={12}>
                    <img
                      src="https://static.utmel.com/80dimg/analogdevicesinc-adum3220arzrl7-9010.jpg"
                      alt="loading"
                    />
                  </Grid>
                  <Grid item className="productCards-itemTwo" xs={12}>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid className="productCards-itemTwo-p" item xs={10}>
                        <p>ADR03ARZ-REEL7</p>
                      </Grid>
                      <Grid className="productCards-itemTwo-name" item xs={12}>
                        <span>Analog Devices Inc.</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;
