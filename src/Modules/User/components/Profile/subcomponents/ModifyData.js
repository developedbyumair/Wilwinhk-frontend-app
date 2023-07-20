import { Autocomplete, Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import CloseIcon from "@mui/icons-material/Close";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { countries } from "../../../../../Utility/RFQ/countaries";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../../../Store/Features/userSlice";
import { loginAccessToken } from "../../../../../Store/Features/userSlice";
function ModifyData({ setOpen,handleClose }) {
  const user = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [job, setjob] = useState();
  const [companyName, setcompanyName] = useState();
  const [address, setaddress] = useState();
  const [Countary, setCountary] = useState();
  const handleUpdateProfileData = async (e) => {
    e.preventDefault();
    if (Name && Phone && job && companyName && address && Countary) {
      let data = {
        name: Name,
        phoneNumber: Phone,
        email:user.email,
        jobTitle: job,
        companyName: companyName,
        country: Countary,
        address: address,
      };
      try {
        console.log(data, "data to go");
        const res = await axios.patch(
          `http://15.206.128.120:8000/api/v1/updateUserInfo/${user._id}`,
          {
            name: Name,
            phoneNumber: Phone,
            email: user.email,
            jobTitle: job,
            companyName: companyName,
            country: Countary,
            address: address,
          },
          {
            headers: {
              auth: token.userToken,
            },
            withCredentials: true,
          }
        );
        console.log(res,"res to update");
        if (res.status === 200) {
          if (res.data) {
            setOpen(false);
            dispatch(loginSuccess(res.data));
            window.location.reload()
          } else {
            console.log("could not get it");
          }
        }
        console.log(res, "response to update profile");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Card className="modifyData-profile">
      <form onSubmit={handleUpdateProfileData}>
        <Grid
          container
          className="modifyData-profile-container"
          columnGap={1}
          rowGap={1}
        >
          <Grid
            sx={{ m: "20px 0px 10px 0px " }}
            className="itemOne"
            item
            xs={12}
          >
            <ModeEditOutlineIcon color="primary" />
            <Typography variant="h5">Edit Profile</Typography>
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              placeholder=""
              value={Name}
              size="small"
              required
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
              fullWidth
              label="Contact Name"
            />
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              value={Phone}
              size="small"
              required
              onChange={(e) => {
                e.preventDefault();
                setPhone(e.target.value);
              }}
              placeholder=""
              label="Telephone"
              fullWidth
            />
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              value={job}
              required
              onChange={(e) => {
                e.preventDefault();
                setjob(e.target.value);
              }}
              size="small"
              placeholder=""
              label="Job Title"
              fullWidth
            />
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              required
              value={companyName}
              onChange={(e) => {
                e.preventDefault();
                setcompanyName(e.target.value);
              }}
              size="small"
              placeholder=""
              label="Company Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              required
              value={address}
              onChange={(e) => {
                e.preventDefault();
                setaddress(e.target.value);
              }}
              size="small"
              placeholder=""
              fullWidth
              label="Address"
            />
          </Grid>
          <Grid item xs={5.9}>
            <Autocomplete
              onChange={(event, value) =>
                setCountary(value.label, "countaryName")
              }
              fullWidth
              id="country-select-demo"
              className="autocomplete-signup"
              //   sx={{ width: 300 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code})
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  required
                  size="small"
                  value={Countary === undefined || null ? "China" : Countary}
                  onChange={(e) => {
                    e.preventDefault();
                    setCountary(e.target.value);
                  }}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
          <Grid className="itemEight" item xs={12}>
            <Button
              startIcon={<PublishedWithChangesIcon />}
              variant="contained"
              type="submit"
            >
              Save Changes
            </Button>
            <Button
              onClick={handleClose}
              startIcon={<CloseIcon />}
              color="error"
              variant="contained"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

export default ModifyData;
