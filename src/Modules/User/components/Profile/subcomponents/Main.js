import {  Button,  Grid, Modal,  TextField, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChangePassword from './ChangePassword';
import ModifyData from './ModifyData';
import { useSelector } from 'react-redux'; 
function Main() {
  const userInfo = useSelector(state=>state.user.currentUser)
  console.log(userInfo);
  const [open, setOpen] = React.useState(false);
  const [openPassword, setOpenPassword] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    }
    function handleClose() {
    setOpen(false);
  }
    const handleOpenPassword = () => {
      setOpenPassword(true)
    };
    const handleClosePassword = () => {
      setOpenPassword(false);
    }
  return (
    <Grid container className="profile-main" rowGap={3}>
      <Grid sx={{ p: "10px" }} item xs={12} className="profile-main-container">
        <AccountCircleIcon color="primary" />
        <Typography variant="h5">{userInfo.email}</Typography>
        <Button
          onClick={handleOpenPassword}
          variant="contained"
          className="profile-main-btn"
        >
          Change Password
        </Button>

        <Modal
          open={openPassword}
          onClose={handleClosePassword}
          className="model"
          disableEnforceFocus
        >
          {/* <Fade in={openPassword}> */}
          <ChangePassword handleClosePassword={handleClosePassword} />
          {/* </Fade> */}
        </Modal>
      </Grid>
      <Grid item xs={12}>
        <Grid container columnGap={1} rowGap={1}>
          <Grid item xl={5.9} lg={5.9} md={5.9} sm={5.9} sx={12} xs={12}>
            <TextField
              fullWidth
              size="small"
              variant="filled"
              label="Contact Name"
              defaultValue={userInfo ? userInfo?.name : "Abdullah Asif"}
              disabled
            />
          </Grid>
          <Grid item xl={5.9} lg={5.9} md={5.9} sm={5.9} sx={12} xs={12}>
            <TextField
              label="Telephone"
              variant="filled"
              defaultValue={userInfo ? userInfo?.phoneNumber : "+923003"}
              disabled
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xl={5.9} lg={5.9} md={5.9} sm={5.9} sx={12} xs={12}>
            <TextField
              variant="filled"
              label="Job Title"
              defaultValue={userInfo ? userInfo.jobTitle : "HR"}
              disabled
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xl={5.9} lg={5.9} md={5.9} sm={5.9} sx={12} xs={12}>
            <TextField
              variant="filled"
              label="Company Name"
              defaultValue={userInfo ? userInfo.companyName : "Abdullah"}
              disabled
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xl={5.9} lg={5.9} md={5.9} sm={5.9} sx={12} xs={12}>
            <TextField
              variant="filled"
              defaultValue={userInfo ? userInfo.country : "Pakistan"}
              disabled
              size="small"
              fullWidth
              label="Country"
            />
          </Grid>
          <Grid item xl={5.9} lg={5.9} md={5.9} sm={5.9} sx={12} xs={12}>
            <TextField
              variant="filled"
              defaultValue={userInfo ? userInfo.address : "House 167"}
              disabled
              fullWidth
              size="small"
              label="Address"
            />
          </Grid>
          <Grid className="profile-modify-btn" item xs={12}>
            <Button onClick={handleOpen} variant="contained">
              Modify
            </Button>
            <Modal
              className="model"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModifyData setOpen={setOpen} handleClose={handleClose} />
            </Modal>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <strong>
              Personal information may be used for purposes such as:
            </strong>
          </Grid>
          <Grid item xs={12}>
            <ul>
              <li>To help you quickly find services or information.</li>
              <li>To deliver content most relevant to you.</li>
              <li>To inform you of special offers, new or updated services.</li>
              <li>
                To contact you when an error occurs and help resolve the issue.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <span>
              We protect the security of your data from loss, misuse,
              disclosure, alteration, destruction or unauthorized access. Please
              read ourfor specific information regarding third party data
              disclosure.
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main