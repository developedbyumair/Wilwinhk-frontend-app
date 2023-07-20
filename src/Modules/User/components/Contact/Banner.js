import React from 'react'
import {Grid} from "@mui/material"
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
function Banner() {
  return (
    <div className="contact-banner">
      <Grid className="" container>
        <Grid className="contact-banner-boxOne" item xs={4}>
          <img
            src="https://www.utmel.com/imgs/profile/contact/contact.png"
            alt="loading..."
          />
        </Grid>
        <Grid className="contact-banner-boxTwo" item xs={7}>
          <h1>
            Your Effective Assistant of the Components Sourcing. We Are
            Passionate About What We Do.
          </h1>
          <span>
            We are the professional distributor of electronic components
            providing a large variety of products to save you a lot of time,
            effort and cost.
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner