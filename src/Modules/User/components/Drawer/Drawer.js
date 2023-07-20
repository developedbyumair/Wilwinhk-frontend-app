import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Divider from "@mui/material/Divider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareIcon from "@mui/icons-material/Compare";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Card, Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompareDrawer from "./CompareDrawer";
import CartDrawer from "./CartDrawer";
import FavDrawer from "./FavDrawer";
import { useSelector } from "react-redux";
function Drawer() {
  const user = useSelector((state) => state.user);
  const [state, setState] = React.useState(false);
  const [stateCart, setStateCart] = React.useState(false);
  const [stateFav, setStateFav] = React.useState(false);
  const navigate = useNavigate();
  const toggleCart = () => {
    setStateCart(!stateCart);
  };

  const toggleFav = () => {
    setStateFav(!stateFav);
  };

  const toggleCompare = () => {
    setState(!state);
  };

  const Compare = (anchor) => (
    <div style={{ width: "400px" }}>
      <CompareDrawer />
    </div>
  );
  const Cart = (anchor) => (
    <div style={{ width: "400px" }}>
      <CartDrawer />
    </div>
  );
  const Fav = (anchor) => (
    <div style={{ width: "400px" }}>
      <FavDrawer />
    </div>
  );
  return (
    <div>
      <React.Fragment key={"right"}>
        <Card elevation={6} className="Drawer-container">
          <Grid
            container
            // rowGap={1}
            justifyContent={"center"}
            alignItems={"center"}
            className="Drawer-container-card"
          >
            <Grid item className="item" xs={12}>
              <IconButton
                onClick={() =>
                  navigate(user.currentUser ? "/profile" : "/login")
                }
                color={"primary"}
              >
                <AccountBoxIcon color="primary" />
              </IconButton>
            </Grid>
            <Divider />
            <Grid item className="item" xs={12}>
              <IconButton onClick={toggleCart} color={"primary"}>
                <ShoppingCartIcon color="primary" />
              </IconButton>
              <SwipeableDrawer
                anchor={"right"}
                open={stateCart}
                onClose={toggleCart}
                onOpen={toggleCart}
              >
                {Cart("right")}
              </SwipeableDrawer>
            </Grid>
            <Grid item className="item" xs={12}>
              <IconButton
                onClick={() => (user.currentUser ? "/profile" : "/rfq")}
                color={"primary"}
              >
                <ListAltIcon color="primary" />
              </IconButton>
            </Grid>
            <Grid item className="item" xs={12}>
              <IconButton onClick={toggleFav} color={"primary"}>
                <FavoriteIcon color="primary" />
              </IconButton>
              <SwipeableDrawer
                anchor={"right"}
                open={stateFav}
                onClose={toggleFav}
                onOpen={toggleFav}
              >
                {Fav("right")}
              </SwipeableDrawer>
            </Grid>
            <Grid item className="item" xs={12}>
              <IconButton color={"primary"}>
                <AssignmentIcon color="primary" />
              </IconButton>
            </Grid>
            <Grid item className="item" xs={12}>
              <IconButton onClick={toggleCompare} color={"primary"}>
                <CompareIcon color="primary" />
              </IconButton>
              <SwipeableDrawer
                anchor={"right"}
                open={state}
                onClose={toggleCompare}
                onOpen={toggleCompare}
              >
                {Compare("right")}
              </SwipeableDrawer>
            </Grid>
          </Grid>
        </Card>
      </React.Fragment>
    </div>
  );
}

export default Drawer;
