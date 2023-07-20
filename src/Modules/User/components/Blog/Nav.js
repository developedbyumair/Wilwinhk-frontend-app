import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation, useNavigate } from "react-router-dom";

function LinkTab(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === props.href;

  const handleClick = (event) => {
    event.preventDefault();
    navigate(props.href);
  };

  return <Tab onClick={handleClick} selected={isActive} {...props} />;
}
function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const tabs = [
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/Projects" },
    { label: "News", href: "/News" },
  ];
  const activeTabIndex = tabs.findIndex(
    (tab) => tab.href === location.pathname
  );
  const handleChange = (e, newValue) => {
    e.preventDefault();
    navigate(tabs[newValue].href);
    setValue(newValue);
    //  console.log(props.href, "newValue");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTabIndex}
        onChange={handleChange}
        aria-label="nav tabs example"
      >
        {tabs.map((tab, index) => (
          <LinkTab key={index} label={tab.label} href={tab.href} />
        ))}
      </Tabs>
    </Box>
  );
}

export default Nav;
