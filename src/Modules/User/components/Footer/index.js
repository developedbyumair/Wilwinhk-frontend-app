import React from 'react'
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from 'react-router-dom';
function Index() {
  const navigate = useNavigate()
  return (
    <div className="footer-container">
      <Grid className="footer-grid-container" container>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-item1">
            <p>Contact Us</p>
            <Divider className="DividerFooter" variant="start" />
            <p>Hong Kong</p>
            <p>Canada </p>
            <p>Email</p>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-item1">
            <p>Information</p>
            <Divider className="DividerFooter" variant="start" />
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
              }}
            >
              Contact Us
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/privacypolicy");
              }}
            >
              Privacy Policy
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/privacypolicy");
              }}
            >
              Cookies Policy
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/terms");
              }}
            >
              Terms & Conditions
            </p>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-item1">
            <p>Support</p>
            <Divider className="DividerFooter" variant="start" />
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/shipping");
              }}
            >
              Shipping & Delivering
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/refund");
              }}
            >
              Purchase Guide
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/refund");
              }}
            >
              Refund & Return
            </p>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-item1">
            <p>Quick Links</p>
            <Divider variant="start" className="DividerFooter" />
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/blog");
              }}
            >
              Blog
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/feedback");
              }}
            >
              FeedBack
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/refund");
              }}
            >
              Return & Refund
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/certification");
              }}
            >
              Certifications
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid className="footer-grid-container" container spacing={0}>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-item2">
            <strong>Follow Us</strong>
            <div className="icons-footer">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-item2">
            <strong>Payment</strong>
            <p
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
              }}
            >
              Contact Us
            </p>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-Subscribe">
            <strong>Subscribe</strong>
            <div className="footer-grid-item2-searchbar">
              <input placeholder="Input Your Email" />
              <button className="footer-grid-item2-fab" variant="extended">
                Subscribe
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} sm={6} sx={12} xs={12}>
          <div className="footer-grid-item2">
            <strong
              onClick={(e) => {
                e.preventDefault();
                navigate("/certification");
              }}
            >
              Certifications
            </strong>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Index