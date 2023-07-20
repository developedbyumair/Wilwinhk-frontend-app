import { Grid } from "@mui/material";
import { Metric } from "@tremor/react";
import React from "react";

function index() {
  const array = [
    "https://static.utmel.com/img/mfg/stmicroelectronics.jpg",
    "https://static.utmel.com/img/mfg/yageo.jpg",
    "https://static.utmel.com/img/mfg/koa-speer-electronics-inc.jpg",
    "https://static.utmel.com/img/mfg/nxp-semiconductors---freescale.jpg",
    "https://static.utmel.com/img/mfg/on-semiconductor.jpg",
    "https://static.utmel.com/img/mfg/linear-technology---analog-devices.jpg",
    "https://static.utmel.com/img/mfg/integrated-device-technology-idt-.jpg",
    "https://static.utmel.com/img/mfg/analog-devices-inc.jpg",
    "https://static.utmel.com/img/mfg/infineon-technologies.jpg",
    "https://static.utmel.com/img/mfg/xilinx.jpg",
    "https://static.utmel.com/img/mfg/isocom-components.jpg",
    "https://static.utmel.com/img/mfg/microchip-technology.jpg",
  ];
  return (
    <div className="manfacturer">
      <Grid container className="manfacturer-container">
        <Grid sx={{ m: "0px 0px 10px 0px" }} item xs={12}>
          <Metric>MANFACTURER</Metric>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            className="manfacturer-itemTwo ring-gray-200 ring-1 shadow rounded-lg bg-white border-blue-500"
            rowGap={1}
            columnGap={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {array.map((e, i) => {
              return (
                <Grid
                  className="manfacturer-itemTwo-imgs"
                  item
                  sm={3.9}
                  md={2.9}
                  lg={1.9}
                  xl={1.9}
                >
                  <img key={i} src={e} alt="loading" />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default index;
