import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Rightbar({ url, heading, img }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // console.log(url,"url");
  return (
    <Paper elevation={4} className="rightbar-container">
      <Grid container>
        <Grid className="rightbar-container-boxOne" item xs={8}> 
          <div className="rightbar-boxOne-items">
            <h2 style={{fontSize:"16px"}}>{heading}</h2>
            <Link className="rightbar-boxOne-text" to={"/"}>
              {url === "rfq" && (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(user.currentUser ? "/rfq" : "login");
                  }}
                  endIcon={<ArrowForwardIosRounded fontSize="small" />}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  View
                </Button>
              )}
              {url === "categories" && (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/categories");
                  }}
                  endIcon={<ArrowForwardIosRounded fontSize="small" />}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  View
                </Button>
              )}
              {url === "blog" && (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(user.currentUser ? "/categories" : "/login");
                  }}
                  endIcon={<ArrowForwardIosRounded fontSize="small" />}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  View
                </Button>
              )}
            </Link>
          </div>
        </Grid>
        <Grid className="rightbar-container-boxTwo" item xs={4}>
          <img className="rightbar-container-img" src={img} alt="loading" />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Rightbar;
