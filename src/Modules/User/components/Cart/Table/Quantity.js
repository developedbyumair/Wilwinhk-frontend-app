import { Grid, IconButton, TextField } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import { Subtitle } from "@tremor/react";

function Quantity() {
  const [Quantity, setQuantity] = useState(1)
  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"} columnGap={0}>
        <Grid item xs={2}>
          <IconButton color="error">
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid item sx={{border:"1px solid"}} xs={1}><Subtitle>{Quantity}</Subtitle></Grid>
        <Grid item xs={2}>
          <IconButton color="success">
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Quantity;
