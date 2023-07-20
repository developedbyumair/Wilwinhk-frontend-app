import React from "react";
import { Footer, Navbar, Shipping } from "../../components";
import { Drawer } from "@mui/material";

function ShippingDelivery() {
  return (
    <div>
      <Navbar />
      <Drawer />
      <Shipping />
      <Footer />
    </div>
  );
}

export default ShippingDelivery;
