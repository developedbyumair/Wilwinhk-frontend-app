import { Grid, Typography } from "@mui/material";
import { Card, Metric, Title } from "@tremor/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Privacy() {
  const [first, setfirst] = useState("");
  console.log(first);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.7.46.114:8000/admin/getPrivecyPolicy"
        );
        console.log(response);
        setfirst(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Card>
      <Grid container rowGap={1}>
        <Grid item xs={12}>
          <Metric>Privacy Policy</Metric>
        </Grid>

        {first && (
          <Grid item xs={12}>
            {first}
          </Grid>
        )}
      </Grid>
    </Card>
  );
}

export default Privacy;
