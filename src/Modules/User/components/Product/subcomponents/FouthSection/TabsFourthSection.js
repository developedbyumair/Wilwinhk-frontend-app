import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
function TabsFourthSection({ Product }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event,newValue) => {
    event.preventDefault()
    setValue(newValue);
    console.log(event, "newValue");
  };
  return (
    <div className="tabs-fourthSection">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Specifications" value="1" />
              <Tab label="PDF" value="2" />
              {/* <Tab label="Product Details" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <TabOne product={Product} />
          </TabPanel>
          <TabPanel value="2">
            <TabTwo />
          </TabPanel>
          <TabPanel value="3">
            <TabThree />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default TabsFourthSection;
