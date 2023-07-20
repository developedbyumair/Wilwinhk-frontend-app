import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import { Subtitle, Text } from "@tremor/react";
function CheckOut() {
  const KEY = "pk_live_5BrPyoTOic9kpFdwu9kTbjuH";
  const cart = useSelector((state) => state.cart.quantity);
  const user = useSelector(state => state.user)
  const totalPrice = useSelector((state) => state.cart.priceTotal);
  const handleStripe = async() =>{
    // try {
    //   const res = await axios.post(
    //     "http://localhost:8000/api/stripe/create-checkout-session",{
    //       cart:cart , userId: user.currentUser._id
    //     }
    //     );
    //     if (res.status === 200) {
    //       window.location.href = res.data.url;
    //     }
    //   console.log(res,"response")
    // } catch (error) {
    //   console.log(error)
    // }
  }
  return (
    <Card className="checkout-cart">
      <Grid
        container
        className=""
        rowGap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Typography className="heading" variant="h5">
            Order Summery
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item className="items" xs={6}>
              <Subtitle>Number of Products:</Subtitle>
            </Grid>
            <Grid item xs={6} className="items-number">
              <Text>0</Text>
            </Grid>
            <Grid item className="items" xs={6}>
              <Subtitle>Subtotal</Subtitle>
            </Grid>
            <Grid item xs={6} className="items-number">
              <Text>${totalPrice}</Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
        <Grid item className="items-button" xs={12}>
        <StripeCheckout
        name="AB Shop"
        billingAddress
        shippingAddress
        stripeKey={KEY}
        >
            <Button onClick={handleStripe} sx={{ width: "100%" }} color="primary" variant="contained">
              CheckOut
            </Button>
        </StripeCheckout>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CheckOut;

    // const onToken = async (stripeToken) => {
    //   setStripeToken(stripeToken);
    //   try {
    //     const res = await axios.post(
    //       "http://15.206.128.120:8000/api/v1/addStripePayment"
    //      , { source:stripeToken, cartData:cart, name:"abdullah" }
    //     );
    //     console.log(res, "response from payment method");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // console.log(StripeToken, "StripeToken");