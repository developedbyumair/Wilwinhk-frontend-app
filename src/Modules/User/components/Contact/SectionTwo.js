import { Grid } from '@mui/material'
import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material';

function SectionTwo() {
  return (
    <div className="sectionTwo-container">
      <Grid container>
        <Grid item xs={6} className="sectionTwo-container-itemOne">
          <div className="sectionTwo-item-heading">
            <img
              src="https://www.utmel.com/imgs/profile/contact/two.png"
              alt="loading"
            />
            <h1>Site Map</h1>
          </div>
          <span>
            Hong Kong, China: Unit 2,22F, Richmond Comm.BLDG. 109 Argyle Street
            Mongkon Kowloon Hongkong
          </span>
          <span>
            China (Mainland): RM 2302 MinHua Building No 7039 BeiHuan Road
            Futian Dist Shenzhen GuangDong China 518034
          </span>
          <span>Our Social Media</span>
          <div className="sectionTwo-item">
            <FacebookIcon color="primary" />
            <Twitter color="primary" />
            <Instagram color="secondary" />
            <LinkedIn color="primary" />
          </div>
        </Grid>
        <Grid item xs={6} className="sectionTwo-container-itemTwo">
          <img
            src="https://www.utmel.com/imgs/profile/contact/map.png"
            alt="loading"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SectionTwo