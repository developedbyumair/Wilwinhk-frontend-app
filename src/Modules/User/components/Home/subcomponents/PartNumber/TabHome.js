import React from 'react'
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Link} from "react-router-dom"
import { Box, Grid, Tooltip, Zoom } from '@mui/material';
import {
  PopularPartsData,
  PopularPartsDataTwo,
  PopularPartsDataThree,
} from "../../../../../../Utility/Home/tabData";
function TabHome() {
   const [value, setValue] = React.useState("1");
   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

  return (
    <div className="partNumber-tabs-container">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Popular Parts" value="1" />
            <Tab label="Latest Parts" value="2" />
            <Tab label="Comparison Parts" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid
            className="partNumber-tabOne-container"
            container
            justifyContent={"space-evenly"}
            alignItems={"center"}
            rowGap={2}
            columnGap={1}
          >
            {PopularPartsData.map((e, i) => {
              return (
                <Grid
                  className="partNumber-tabOne-data"
                  key={i}
                  item
                  xs={5.7}
                  sm={3.7}
                  md={2.9}
                  lg={2}
                  xl={2}
                >
                  <Link className="partNumber-tabOne-dataSpan" to={"/"}>
                    <Tooltip
                      title={e}
                      placement="right-start"
                      TransitionComponent={Zoom}
                      arrow
                    >
                      <span>{e}</span>
                    </Tooltip>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid
            className="partNumber-tabOne-container"
            container
            justifyContent={"space-evenly"}
            alignItems={"center"}
            rowGap={2}
            columnGap={1}
          >
            {PopularPartsDataTwo.map((e, i) => {
              return (
                <Grid className="partNumber-tabOne-data" key={i} item xs={2}>
                  <Link className="partNumber-tabOne-dataSpan" to={"/"}>
                    <span>{e}</span>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid
            className="partNumber-tabOne-container"
            container
            justifyContent={"space-evenly"}
            alignItems={"center"}
            rowGap={2}
            columnGap={1}
          >
            {PopularPartsDataThree.map((e, i) => {
              return (
                <Grid className="partNumber-tabOne-data" key={i} item xs={2}>
                  <Link className="partNumber-tabOne-dataSpan" to={"/"}>
                    <span>{e}</span>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default TabHome;