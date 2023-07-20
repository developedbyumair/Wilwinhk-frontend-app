import React from "react";
import { Grid } from "@mui/material";
import Table from "./Table/TableCart";
import CheckOut from "./CheckOut/CheckOut";
import { BeforeFooterInfo, Breadcrumbs, Noitems } from "../../../../common";
import { useSelector } from "react-redux";
function Index() {
  const cart = useSelector(state=>state.cart.quantity)
  return (
    <div> 
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={2}
        className="cart"
      >
        <Grid item xs={11.5}>
          <Breadcrumbs />
        </Grid>
      {
        cart.length === 0 ?
        <Grid item xs={7.5}>
        <Noitems/>
        </Grid>
        :
        <Grid item xs={12}>
          <Grid container className="cartItemOne" columnGap={1}>
            <Grid item xs={12}>
              <Table />
            </Grid>
            {/* <Grid item xs={3}>
              <CheckOut />
            </Grid> */}
          </Grid>
        </Grid>
      }
        <Grid item xs={12}>
          <BeforeFooterInfo />
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;
