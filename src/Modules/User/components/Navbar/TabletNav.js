import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LOGO from "../../../../common/Images/wilwin logo/wilwin_logo-1-removebg-preview.png";
import ListItemIcon from "@mui/material/ListItemIcon";
import GridViewIcon from "@mui/icons-material/GridView";
import ListItemText from "@mui/material/ListItemText";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CompareIcon from "@mui/icons-material/Compare";
import MailIcon from "@mui/icons-material/Mail";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CottageIcon from "@mui/icons-material/Cottage";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
function TabletNav() {
  const navigate = useNavigate()
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.text.secondary, 0.05),
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.secondary, 0.07),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Profile", "Cart"].map((text, index) => (
          <ListItem
            onClick={(e) => {
              e.preventDefault();
              if (text === "Home") {
                navigate("/");
              }
              if (text === "Profile") {
                navigate("/profile");
              }
              if (text === "Cart") {
                navigate("/cart");
              }
            }}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {text === "Home" && <CottageIcon />}
                {text === "Profile" && <AccountCircleIcon />}
                {text === "Cart" && <ShoppingCartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Compare Page", "Blogs & Post", "Certifications"].map(
          (text, index) => (
            <ListItem
              onClick={(e) => {
                e.preventDefault();
                if (text === "Compare Page") {
                  navigate("/comparepage");
                }
                if (text === "Blogs & Post") {
                  navigate("/blog");
                }
                if (text === "Certifications") {
                  navigate("/certifications");
                }
              }}
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {text === "Compare Page" && <CompareIcon />}
                  {text === "Blogs & Post" && <GridViewIcon />}
                  {text === "Certifications" && <WorkspacePremiumIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
  return (
    <div>
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer("left", true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className="midNav-boxOne">
            <img
              onClick={() => navigate("/")}
              className="img"
              src={LOGO}
              alt="loading"
            />
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {["left"].map((anchor) => (
        <React.Fragment key={"left"}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      {/* <Card className="card-navbar">
        <Grid container>
            <Grid item xs={12}>Home</Grid>
            <Grid item xs={12}>Profile</Grid>
            <Grid item xs={12}>Cart</Grid>
            <Grid item xs={12}>Contact</Grid>
        </Grid>
      </Card> */}
    </div>
  );
}

export default TabletNav;
