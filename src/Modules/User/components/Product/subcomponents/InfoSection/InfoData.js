import { Button, Divider, Grid } from "@mui/material";
import { Bold, Metric, Subtitle, Text } from "@tremor/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddtoCart,
  RemovefromCart,
} from "../../../../../../Store/Features/cartSlice";
import { addRFQ, removeRFQ } from "../../../../../../Store/Features/RFQSlice";
import { AddtoCartAPI } from "../../../../../../Store/API/AddtoCart";
import { RemovefromCartAPI } from "../../../../../../Store/API/RemovefromCart";
import { useNavigate } from "react-router-dom";
function InfoData({ product }) {
  // console.log(product, "product");
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const rfq = useSelector((state) => state.rfq);
  const navigate = useNavigate();
  // console.log(rfq, "rfq data");
  const handleRfq = (e) => {
    e.preventDefault();
    if (user.currentUser) {
      dispatch(addRFQ(product));
    } else {
      navigate("/login");
    }
    // console.log("added to rfq");
  };
  const handleDeleteRfq = (e) => {
    e.preventDefault();
    dispatch(removeRFQ({ id: product._id }));
    // console.log("removed to rfq");
  };
  const handleAddtoCart = async () => {
    if (user.currentUser) {
      let datatoUpdate = {
        id: product._id,
        images: product.images[0].url,
        title: product.title,
        mfrno: product.mfrNo,
        desc: product.description,
        realPrice: product.price,
        price: product.price,
        quantity: 1,
      };
      let apiData = {
        productID: product._id,
        name: product.title,
        price: product.price,
        quantity: 1,
      };
      try {
        const res = await AddtoCartAPI(user.userToken, apiData);
        console.log(res);
        if (res.status === 200) {
          dispatch(
            AddtoCart({
              products: product,
              productsID: product._id,
              item: datatoUpdate,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
    // console.log(datatoUpdate, "datatoUpdate");
  };
  const handleRemovefromCart = async () => {
    try {
      const res = await RemovefromCartAPI(product._id, user.userToken);
      console.log(res, "response to delete cart");
      if (res.status === 200) {
        dispatch(RemovefromCart({ productsID: product._id }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid container className="infoData-product" rowGap={4}>
      <Grid item xs={12} className="itemOne">
        <Metric>{product.title}</Metric>
      </Grid>
      <div>
        <Divider orientation="horizontal" />
      </div>
      <Grid item xs={12} className="itemTwo">
        <Subtitle>Manfacturing Number:</Subtitle>
        <Text>
          <Bold>{product?.mfrNo ? product.mfrNo : "-"}</Bold>
        </Text>
      </Grid>
      <Grid item xs={12} className="itemThree">
        <Subtitle>Manfacturer:</Subtitle>
        <Text>
          <Bold>{product?.mfr ? product.mfr : "-"}</Bold>
        </Text>
      </Grid>
      <Grid item xs={12} className="itemFour">
        <Subtitle>Manfacturer Number:</Subtitle>
        <Text>
          <Bold>{product?.mfrNo ? product.mfrNo : "-"}</Bold>
        </Text>
      </Grid>
      <Grid item xs={12} className="itemFour">
        <Subtitle>Price</Subtitle>
        <Text>
          <Bold>{product?.price ? product.price : "-"}</Bold>
        </Text>
      </Grid>
      <Grid item xs={12} className="itemFive">
        <Subtitle>Package: </Subtitle>
        <Text>
          <Bold>{product?.package ? product.package : "-"}</Bold>
        </Text>
      </Grid>
      {/* <Grid item xs={12} className="itemSix">
        <span>ECAD Model:</span>
        <img
          src="https://utmel.componentsearchengine.com/icon.php?mna=Hirose%20Electric%20Co%20Ltd&mpn=DF13-3S-1.25C&lbl=1&lbc=000000&lang=en-US&q3=1"
          alt="loading"
        />
      </Grid> */}
      <Grid item xs={12} className="itemSeven">
        <Subtitle>Description</Subtitle>
        <Text>
          <Bold>{product?.description ? product?.description : "-"}</Bold>
        </Text>
      </Grid>
      <Grid item xs={12} className="itemEight">
        {product?.price ? (
          <>
            {cartData?.productsID.includes(product._id) ? (
              <>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={handleRemovefromCart}
                >
                  Remove From Cart
                </Button>
              </>
            ) : (
              <Button variant="outlined" onClick={handleAddtoCart}>
                Add to Cart
              </Button>
            )}
          </>
        ) : (
          <>
            {rfq.rfqProductsID.includes(product._id) ? (
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteRfq}
              >
                Remove from RFQ List
              </Button>
            ) : (
              <Button variant="outlined" onClick={handleRfq}>
                Add to RFQ List
              </Button>
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
}

export default InfoData;
