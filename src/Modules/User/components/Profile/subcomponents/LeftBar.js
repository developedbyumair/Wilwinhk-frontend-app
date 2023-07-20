import { Card, Grid } from '@mui/material'
import React from 'react'
import DvrIcon from "@mui/icons-material/Dvr";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
function LeftBar({ setMains }) {
  return (
    <Grid container rowGap={2}>
      <Grid className="leftbar-item" onClick={() => setMains(1)} item xs={12}>
        <Card elevation={2} className="icons">
          <PersonRoundedIcon />
        </Card>
        <Card className="icoName">
          <span>My Profile</span>
        </Card>
      </Grid>
      <Grid className="leftbar-item" onClick={() => setMains(2)} item xs={12}>
        <Card elevation={2} className="icons">
          <DvrIcon />
        </Card>
        <Card className="icoName">
          <span>Order Status and History</span>
        </Card>
      </Grid>
      <Grid className="leftbar-item" onClick={() => setMains(3)} item xs={12}>
        <Card elevation={2} className="icons">
          <WorkHistoryIcon />
        </Card>
        <Card className="icoName">
          <span>RFQ History</span>
        </Card>
      </Grid>
      <Grid className="leftbar-item" onClick={() => setMains(4)} item xs={12}>
        <Card elevation={2} className="icons">
          <FavoriteIcon />
        </Card>
        <Card className="icoName">
          <span>Favorite</span>
        </Card>
      </Grid>
      {/* <Grid className="leftbar-item" onClick={() => setMains(5)} item xs={12}>
        <Card elevation={2} className="icons">
          <HomeIcon />
        </Card>
        <Card className="icoName">
          <span>Address Management</span>
        </Card>
      </Grid> */}
    </Grid>
  );
}

export default LeftBar