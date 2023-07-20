import { Tab, Tabs } from "@mui/material";
import { Card } from "@tremor/react";
import React from "react";
import { tabsHeadings } from "../../../../Utility/Manfacturer/Manfacturer";

function ManfacturerTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Card>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          scrollButtons="auto"
          aria-label="secondary tabs example"
        >
          {tabsHeadings.map((e, i) => (
            <Tab value={i} label={e} />
          ))}
        </Tabs>
      </Card>
    </div>
  );
}

export default ManfacturerTabs;
