import { Grid, Typography } from "@mui/material";
import { Card, Metric, Title } from "@tremor/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Terms() {
  const [first, setfirst] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.7.46.114:8000/admin/getTerms"
        );
        setfirst(response.data.content);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <Grid container rowGap={2}>
            <Grid item xs={12}>
              <Metric>Terms & Conditions</Metric>
            </Grid>
            <Grid item xs={12}>
              <div
                className="singleblog-my-container"
                dangerouslySetInnerHTML={{ __html: first }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Terms;
