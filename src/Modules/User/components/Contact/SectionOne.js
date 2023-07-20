import React from 'react'
import { Paper, Grid } from "@mui/material";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
// import  Grid  from "@mui/material/Unstable_Grid2";
function SectionOne() {
  return (
    <div className="sectionOne">
      <Grid container spacing={2}>
        <Grid item xs={12} className="sectionOne-boxOne">
          <img
            src="https://www.utmel.com/imgs/profile/contact/one.png"
            alt="loading"
          />
          <h1>Get In Touch</h1>
        </Grid>
        <Grid item xs={12} className="sectionOne-boxTwo">
          <Grid
            container
            rowGap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid className="sectionOne-boxTwo-itemOne" item xs={12}>
              <Paper className="sectionOne-boxTwo-cardsOne" elevation={4}>
                <h1>Hongkong</h1>
                <div className="sectionOne-boxTwo-item">
                  <AccountBalanceRoundedIcon color="primary" fontSize="small" />
                  <span>Honkong Wilwin Technology Limited</span>
                </div>
                <div className="sectionOne-boxTwo-item">
                  <PhoneInTalkRoundedIcon color="primary" fontSize="small" />
                  <span>+852 53495777</span>
                </div>
                <div className="sectionOne-boxTwo-item">
                  <MailRoundedIcon color="primary" fontSize="small" />
                  <span>info@wilwinhk.com</span>
                </div>
                <div className="sectionOne-boxTwo-item">
                  <LocationOnRoundedIcon color="primary" fontSize="small" />
                  <span>
                    Add: Unit 2,22F, Richmond Comm.BLDG. 109 Argyle Street
                    Mongkon Kowloon Hongkong
                  </span>
                </div>
              </Paper>
            </Grid>
            <Grid className="sectionOne-boxTwo-itemTwo" item xs={12}>
              <Paper className="sectionOne-boxTwo-cardsOne" elevation={4}>
                <h1>China (Mainland)</h1>
                <div className="sectionOne-boxTwo-item">
                  <AccountBalanceRoundedIcon color="primary" fontSize="small" />
                  <span>Wilwin Technology Limited</span>
                </div>
                <div className="sectionOne-boxTwo-item">
                  <PhoneInTalkRoundedIcon color="primary" fontSize="small" />
                  <span>+86-13186971118</span>
                </div>
                <div className="sectionOne-boxTwo-item">
                  <MailRoundedIcon color="primary" fontSize="small" />
                  <span>sales@wilwinhk.com</span>
                </div>
                <div className="sectionOne-boxTwo-item">
                  <LocationOnRoundedIcon color="primary" fontSize="small" />
                  <span>
                    Address: RM 2302 MinHua Building No 7039 BeiHuan Road Futian
                    Dist Shenzhen GuangDong China 518034
                  </span>
                </div>
              </Paper>
            </Grid>
            {/* <Grid className="sectionOne-boxTwo-itemThree" item xs={12}>
              <Paper className="sectionOne-boxTwo-cardsTwo" elevation={4}>
                <h1>China ( MainLand )</h1>
                <div className="sectionOne-boxTwo-item">
                  <AccountBalanceRoundedIcon color="primary" fontSize="small" />
                  <span>Utmel Electronic Limited</span>
                </div>
                <div className="sectionOne-boxTwo-item">
                  <LocationOnRoundedIcon color="primary" fontSize="small" />
                  <span>
                    Unit 01-02, 35th Floor, West Tower, AVIC Center, No. 1018,
                    Huafu Road, Futian District, Shenzhen，China
                  </span>
                </div>
              </Paper>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SectionOne;