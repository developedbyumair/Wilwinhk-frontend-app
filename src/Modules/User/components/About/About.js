import { Grid, Typography } from "@mui/material";
import { Card, Metric, Title } from "@tremor/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function About() {
  const [first, setfirst] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.7.46.114:8000/admin/getAboutus"
        );
        setfirst(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <img
            src="https://www.utmel.com/imgs/profile/about/banner.jpg"
            alt="loading"
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Grid container rowGap={2}>
              <Grid item xs={12}>
                <Metric>About Us</Metric>
              </Grid>
              {first && (
                <Grid item xs={12}>
                  <div
                    className="singleblog-my-container"
                    dangerouslySetInnerHTML={{ __html: first.description }}
                  />
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
