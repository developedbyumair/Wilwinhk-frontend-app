import { Box, Tab } from '@mui/material'
import React from 'react'
import { TabList, TabContext } from "@mui/lab";
import TabPanel from '@mui/lab/TabPanel';
import TabOneFifthSection from './TabOneFifthSection';
function TabsFifthSection() {
   const [value, setValue] = React.useState("1");

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Hot Sale" value="1" />
            <Tab label="Related Categories" value="2" />
            <Tab label="Include Parts" value="3" />
            <Tab label="Popular Search" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><TabOneFifthSection/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
      </TabContext>
    </div>
  );
}

export default TabsFifthSection