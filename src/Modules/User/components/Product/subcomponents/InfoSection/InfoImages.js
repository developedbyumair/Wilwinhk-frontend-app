import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Button, Grid } from "@mui/material";
import CompareIcon from "@mui/icons-material/Compare";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  AddtoFav,
  RemovefromFav,
} from "../../../../../../Store/Features/favSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  AddtoCompare,
  RemovefromCompare,
} from "../../../../../../Store/Features/compareSlice";
import { useNavigate } from "react-router-dom";
function InfoImages({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fav = useSelector((state) => state.fav);
  const compare = useSelector((state) => state.compare);
  const user = useSelector((state) => state.user);
  console.log(compare, "compare redux");
  const handleCompare = (e) => {
    e.preventDefault();
    if (user.currentUser) {
      dispatch(AddtoCompare({ products: product, productsID: product._id }));
    }else{
      navigate("/login")
    }
  };
  const handleCompareDelete = (e) => {
    e.preventDefault();
    dispatch(RemovefromCompare({ productsID: product._id }));
  };
  const handleFav = async (e) => {
  if (user.currentUser) {
    e.preventDefault();
    try {
      dispatch(AddtoFav({ products: product, productsID: product._id }));
    } catch (error) {
      console.log(error);
    }
  }
  else{
    navigate("/login")
  }
  };
  const handleFavDelete = async (e) => {
    e.preventDefault();
    try {
      dispatch(RemovefromFav({ productsID: product._id }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid
      container
      columnGap={1}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={1}
      className="infoImages-productPage"
    >
      <Grid item xs={12} className=" infoImages-itemOne">
        <Zoom>
          <img src={product.images[0].url} alt="loading" />
        </Zoom>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={3}
        sx={4}
        xs={12}
        className="infoImages-itemTwo"
      >
        {fav.productsIDFav.includes(product._id) ? (
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            fullwidth
            color="error"
            startIcon={<FavoriteIcon />}
            onClick={handleFavDelete}
          >
            Remove from Favourite
          </Button>
        ) : (
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            fullwidth
            startIcon={<FavoriteBorderIcon />}
            onClick={handleFav}
          >
            Favourite
          </Button>
        )}
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={3}
        sx={4}
        xs={12}
        className="infoImages-itemThree"
      >
        {compare.compareID.includes(product._id) ? (
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            fullwidth
            color="error"
            onClick={handleCompareDelete}
            startIcon={<CompareIcon />}
          >
            Remove from Compare
          </Button>
        ) : (
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            fullwidth
            onClick={handleCompare}
            startIcon={<CompareIcon />}
          >
            Compare
          </Button>
        )}
      </Grid>
      <Grid item xs={12} className="infoImages-itemFour">
        <img src="https://www.utmel.com/imgs/free/free.png" alt="loading" />
      </Grid>
    </Grid>
  );
}

export default InfoImages;
