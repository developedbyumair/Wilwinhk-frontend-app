import React, { useState } from "react";
import { Callout, Metric, Subtitle, TextInput, Title } from "@tremor/react";
import { ExclamationIcon } from "@heroicons/react/solid";
import {
  Button,
  Card,
  Grid,
  IconButton,
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Product from "./Product";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCart, UpdateCart } from "../../../../../Store/Features/cartSlice";
import { RemovefromCart } from "../../../../../Store/Features/cartSlice";
import { Numeral } from "react-numeral";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";


function TableCart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  console.log(user.currentUser, "cart");
  const [page, setPage] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleStripe = async () => {
const stripe = await loadStripe(
  "pk_test_51ND2uwGClTp3yBV7V1VODYMInh5MmBOXp5KZzNvCiW8ECxUBSzFGBU4l47yFBlDWJFvnWrKlAr7Q6EzlsgE7a4yG000q0kCeWf"
);
let data = cart.quantity.map((cart) => {
  return {
    id: cart.id,
    name: cart.title,
    images: cart.images,
    description: cart.desc,
    price: cart.realPrice,
    quantity: cart.quantity,
  };
});
let customer = {
  name: "abdullah",
  email: "chaudharyabdullahasif@gmail.com",
  address: {
    line1: "123 house",
  },
};
// console.log(data);
try {
  const res = await axios.post(
    "http://3.7.46.114:8000/api/v1/stripeWithCustomer",
    {
      cartItems: data,
      stripeCustomerId: "",
      // customer,
    },
    {
      headers: {
        auth: user.userToken,
      },
      withCredentials: true,
    }
  );
  // console.log("sessionId", res.data.id);
  if (res.status === 200) {
    const responseRedirect = stripe.redirectToCheckout({
      sessionId: res.data.id,
    });
    // console.log("sessionId to redirect", responseRedirect);
    dispatch(DeleteCart());
  }
  // console.log(res, "response");
} catch (error) {
  // console.log(error);
}
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleQuantity = (e) => { 
    // console.log(Quantity, "i");
    // console.log(e, "e"); 
    if (Quantity >= 1) {
      if (e.quantity < Quantity) {
        let quantityItems = Quantity;
        let priceItems = e.realPrice * Quantity;
        // console.log(priceItems, "priceItems");
        dispatch(
          UpdateCart({ ID: e.id, quantity: quantityItems, price: priceItems })
        );
      } else if (e.quantity > Quantity) {
        let priceItems = e.realPrice * Quantity;
        // console.log(priceItems, "quantityItems");
        dispatch(
          UpdateCart({
            ID: e.id,
            quantity: Quantity,
            price: priceItems,
          })
        );
      } else {
        return;
      }
      // console.log(e, "value of product from cart");
    } else {
      setOpen(true);
    }
  };
  const handleDeleteCartItem = (e) => {
    // console.log(e, "e");
    dispatch(RemovefromCart({ productsID: e.id }));
  };
  // console.log(cart.quantity.length, "cart.quantity");
  return (
    <>
      <Card>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          className="tablecart-container"
        >
          <Grid sx={{ m: "20px 10px" }} item xs={12} className="table-heading">
            <Metric>Shopping Cart</Metric>
            <Button onClick={handleStripe} variant="contained" color="primary">
              Proceed For Checkout
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div
              className="table-category-paper"
              elevation={2}
              sx={{ width: "99%", overflow: "hidden" }}
            >
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Title>Product</Title>
                      </TableCell>
                      <TableCell>
                        <Title>Price</Title>
                      </TableCell>
                      <TableCell align="center">
                        <Title>Quantity</Title>
                      </TableCell>
                      <TableCell>
                        <Title>Delete</Title>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart?.quantity
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      ?.map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row._id}
                          >
                            <TableCell>
                              <Product productInfo={row} />
                            </TableCell>
                            <TableCell>
                              <Subtitle>
                                <Numeral value={row.price} format={"0a"} />
                              </Subtitle>
                            </TableCell>
                            <TableCell>
                              <Subtitle>
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    handleQuantity(row);
                                  }}
                                >
                                  <TextInput
                                    defaultValue={row.quantity}
                                    onChange={(e) =>
                                      setQuantity(e.target.value)
                                    }
                                    type="number"
                                    placeholder="min 1"
                                  />
                                </form>
                              </Subtitle>
                            </TableCell>
                            <TableCell>
                              <IconButton
                                onClick={() => handleDeleteCartItem(row)}
                                color="error"
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={cart.products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default TableCart;
