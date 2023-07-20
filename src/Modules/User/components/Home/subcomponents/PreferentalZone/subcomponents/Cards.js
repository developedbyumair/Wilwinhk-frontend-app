import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ dataMap }) {
  console.log(dataMap.images[0].url, "dataMap.images[0].url");
  const navigate = useNavigate()
  return (
    <Grid className="preferencial-card" container>
      <Grid item xs={12} className="preferencial-card-itemOne">
        <img src={dataMap.images[0].url} alt="loading" />
      </Grid>
      <Grid className="preferencial-card-itemTwo" item xs={12}>
        <span className="preferencial-card-itemTwo-span">SALE</span>
        <strong>{dataMap.mfrNo}</strong>
        <span className="preferencial-card-itemTwo-name">{dataMap.mfr}</span>
        <Button
          className="preferencial-card-itemTwo-btn"
          variant="contained"
          size="small"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/product/${dataMap._id}`);
          }}
        >
          View
        </Button>
      </Grid>
    </Grid>
  );
}

export default Cards;
