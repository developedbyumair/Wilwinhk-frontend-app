import { Grid } from "@mui/material";
import { Card, Metric } from "@tremor/react";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function ConfirmEmail() {
  useEffect(() => {
    const verifications = async () => {
      // const response = await axios.get(
      //   "http://52.66.206.34:5000/api/v1/verify"
      // );
      // console.log(response,"responseData");
    };
    verifications();
  }, []);
  return (
    <Grid
      // sx={{ height: "100vh", width: "100vw" }}
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={8}>
        <Card style={{marginTop:"15%",display:"flex",justifyContent:"center"}}>
          <Metric>
            Confirm your Email and <Link to={"/login"}>Login to account!</Link>{" "}
          </Metric>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ConfirmEmail;
