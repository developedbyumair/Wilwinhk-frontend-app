import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from '@mui/material';
function SwiperBox() {
  return (
    <Grid container rowGap={1} justifyContent={"center"} alignItems={"center"} className="swiperBox">
      <Grid item xs={12}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={4}>
            <img
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
              alt="loading"
            />
          </Grid>
          <Grid className="swiperBox-verified" item xs={8}>
            <CheckCircleIcon /> <span>Verified</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <h4>It is a pleasure to work with you</h4>
      </Grid>
      <Grid item xs={12}>
        <span>Phone call E-mails Good products</span>
      </Grid>
      <Grid item xs={12}>
        <Grid container className="swiperBox-name">
          <span>Piotr Becla,</span>
          <span> 5 days ago</span>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SwiperBox