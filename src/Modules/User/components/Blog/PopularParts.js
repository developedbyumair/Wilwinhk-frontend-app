import { Divider, Grid } from "@mui/material";
import { Subtitle, Text, Title } from "@tremor/react";
import React, { useEffect } from "react";
import { PopularData } from "../../../../Store/API/PopularData";

function PopularParts() {
  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await PopularData()
        // console.log(response, "response of popular data");
      } catch (error) {
        // console.log(error);
      }
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Grid container className="popular-parts">
        <Grid item xs={12} className="popular-parts-container">
          <Grid container gap={1} alignItems={"center"}  className="itemOne">
            <Grid item xs={3} className="item-image">
              <img
                src="https://static.utmel.com/80eimg/edacinc-634m62363bn2-3389.png"
                alt="loading"
              />
            </Grid>
            <Grid className="itemTwo" item xs={8}>
              <Title>Manfacturer number</Title>
              <Subtitle><Text>Manfacturer name</Text></Subtitle>
              <Subtitle><Text>Description</Text></Subtitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
      </Grid>
    </div>
  );
}

export default PopularParts;
