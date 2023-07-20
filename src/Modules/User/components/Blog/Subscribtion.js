import { Button, Grid } from "@mui/material";
import { Card, Metric, TextInput } from "@tremor/react";
import React, { useState } from "react";
import { Subscribe } from "../../../../Store/API/Subscribe";

function Subscribtion() {
  const [Email, setEmail] = useState()
  const [Name, setName] = useState()
    const handleSubmit = async() =>{
      let dataSubs = {
        email:Email,
        name:Name,
      }
      try {
        const data = await Subscribe(dataSubs);
        console.log(data,"subscribe");
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Grid
          container
          rowGap={2}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Grid item xs={6}>
            <Metric>Subscription!</Metric>
          </Grid>
          <Grid item xs={12}>
            <TextInput
              placeholder="Your Name"
              onChange={(e) => {
                e.preventDefault();
                setName(e.value.target);
              }}
              type="text"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.value.target);
              }}
              placeholder="Email"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Card>
    </form>
  );
}

export default Subscribtion;
