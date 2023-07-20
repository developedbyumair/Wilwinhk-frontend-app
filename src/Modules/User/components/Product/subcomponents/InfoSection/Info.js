import { Button, Grid, IconButton, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import ShareIcon from "@mui/icons-material/Share";
import InfoImages from './InfoImages';
import InfoData from './InfoData';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Info({ Product, setProduct }) {
  console.log(Product, "Product");
  const Token = useSelector(state=>state.user.userToken)
  const { id } = useParams();
  useEffect(() => {
    const fetchSingleProduct = async () => { 
      try {
        const res = await axios.get(
          `http://3.7.46.114:8000/api/v1/fetchSingleProduct/${id}`,
          {
            headers: {
              auth: Token,
            },
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          setProduct(res.data.product)
          // console.log(res.data.product, "res");
        }
      } catch (error) {
        // console.log(error);
      }
    };
    fetchSingleProduct();
  }, [id]);

  return (
    <div className="product-infoSection">
      <Grid container columnGap={1} rowGap={1} className="">
        <Grid item className="container-itemOne" lg={8.7}>
          <Grid
            container
            columnGap={1}
            justifyContent={"center"}
            alignItems={"center"}
            className="container-itemOne--container"
          >
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              {Object.keys(Product).length !== 0 && (
                <InfoImages product={Product} />
              )}
            </Grid>
            <Grid item xl={8.9} lg={8.8} md={8.8} sm={12} xs={12}>
              {Object.keys(Product).length !== 0 && (
                <InfoData product={Product} />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="container-itemTwo" lg={3.2}>
          <Grid rowGap={2} container className="itemTwo-container">
            <Grid item className="container--itemTwo" xs={12}>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                className="container--itemTwo-container"
              >
                <Grid item xs={10} className="instock">
                  <strong>
                    In Stock: <number> {
                      Product.stock ? Product.stock : "Product not Avaiable"
                    }</number>
                  </strong>
                </Grid>
                <Grid item xs={1.7} className="shareIcon">
                  <IconButton aria-label="shareIcon">
                    <ShareIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="rqt-RFQ">
              <span>Please send RFQ , we will respond immediatel</span>
            </Grid>
            <Grid item xs={12} className="contact-name">
              <TextField label="Name" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12} className="contact-email">
              <TextField label="Email" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12} className="contact-company">
              <TextField label="Company Name" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12} className="contact-country">
              <TextField label="Country" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12} className="contact-quantity">
              <TextField
                label="Quantity"
                fullWidth
                id="outlined-number"
                type="number" 
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} className="contact-btn">
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: "#ff6221" }}
                
              >
                Quick RFQ
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Info;