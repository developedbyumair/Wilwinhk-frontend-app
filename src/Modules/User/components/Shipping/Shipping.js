import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Card, Metric } from "@tremor/react";
import axios from "axios";

function Shipping() {
  const [first, setfirst] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://3.7.46.114:8000/admin/getShipping");
        setfirst(res.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Card style={{ marginBottom: "100px" }}>
      <Grid container gap={1}>
        <Grid item xs={12}>
          <Metric>Shipping & Delivery</Metric>
        </Grid>
        <Grid item xs={12}>
          <div
            className="singleblog-my-container"
            dangerouslySetInnerHTML={{ __html: first }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default Shipping;
