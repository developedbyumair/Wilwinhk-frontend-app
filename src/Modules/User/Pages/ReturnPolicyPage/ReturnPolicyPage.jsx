import React from "react";
import { Footer, Navbar } from "../../components";
import { Drawer } from "@mui/material";
import ReturnPolicy from "../../components/ReturnPolicy/ReturnPolicy";

function ReturnPolicyPage() {
  return (
    <div>
      <Navbar />
      <Drawer />
      <ReturnPolicy />
      <Footer />
    </div>
  );
}

export default ReturnPolicyPage;
