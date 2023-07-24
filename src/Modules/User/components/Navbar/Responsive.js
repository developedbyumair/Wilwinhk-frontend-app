import React, { useEffect, useState } from "react";
import UpperNavbar from "./UpperNavbar";
import MidNavbar from "./MidNavbar";
import AppBar from "@mui/material/AppBar";
import LowerNavbar from "./LowerNavbar";
import TabletNav from "./TabletNav";
function Responsive() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth, "windowWidth");
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);
  return (
    <React.Fragment>
      {windowWidth >= 1024 && (
        <AppBar position="sticky" className="navbar-container">
          <UpperNavbar />
          <MidNavbar />
          <LowerNavbar />
        </AppBar>
      )}
      {windowWidth < 1024 && <TabletNav />}
    </React.Fragment>
  );
}

export default Responsive;
