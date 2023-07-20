import React, { useEffect, useState } from "react";
import { Button, Metric, Title } from "@tremor/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Grid, TextField, Autocomplete, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { countries } from "../../../../Utility/RFQ/countaries";

function Signup() {
  const [username, setusername] = useState();
  const [state, setstate] = useState();
  const [city, setcity] = useState();
  const [email, setemail] = useState(false);
  const [emailError, setemailError] = useState();
  const [password, setpassword] = useState();
  const [passwordError, setpasswordError] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState();
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
  const [Phone, setPhone] = useState();
  const [PhoneError, setPhoneError] = useState(false);
  const [companyName, setcompanyName] = useState();
  const [Countary, setCountary] = useState();
  const [Address, setAddress] = useState();
  const [job, setjob] = useState();
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Phone.toString().length, "length");
    if (
      username &&
      email &&
      password &&
      confirmPassword &&
      companyName &&
      Countary &&
      Address
    ) {
      if (password !== confirmPassword) {
        console.log("pressed");
        console.log(password, "pressed");
        console.log(confirmPassword, "pressed");
        return setconfirmPasswordError(true);
      } else {
        setconfirmPasswordError(false);
      }
      // if (Phone.toString().length < 10 || Phone.toString().length > 11) {
      //   return setPhoneError(true);
      // } 
      // else {
      //   setPhoneError(false);
      // }
      const data = {
        email: email,
        phoneNumber: "09007860111",
        password: password,
        name: username,
        confirmPassword: confirmPassword,
        companyName: companyName,
        // jobTitle: "job",
        country: Countary,
        city: "city",
        state: "state",
        address: Address,
        is_verified: 0
      };
      // console.log(data, "formData");
      // const res = await responseSignup(
      //   data,
      //   setpasswordError,
      //   setPhoneError,
      //   setconfirmPasswordError
      // );
      try {
        const res = await axios.post(
          "http://3.7.46.114:8000/api/v1/signup",
          data
        );
        // console.log(res, "Data of response");
        if (res.data.success === true) {
          setemailError(false);
          navigate("/confirmEmail");
        } else if (res.data.success === false) {
          setemailError(true);
        } else {
          return;
        }
        // console.log(res.data, "Data of response");
      } catch (error) {
        console.log(error);
        if (error?.response.data.error === "User already exists") {
          setemailError(true);
        }
        if (error?.response.data.error) {
          error?.response.data.error.map((e) => {
            if (e.msg === "Passwords do not match") {
              setpasswordError(true);
              setconfirmPasswordError(true);
            } else if (e.msg === "Phone number should be minimum 10 digits") {
              setPhoneError(true);
            } else if (e.path === "password") {
              setpasswordError(true);
            } else {
              // console.log("errror to see in signup");
            }
          });
        }
      }
      // if(res.data){
      //   console.log(res.data,"data of response");
      // }
    } else {
      // console.log("not working");
    }
  };
  return (
    <div className="signup-container">
      <Grid container className="" gap={2}>
        <Grid item className="" xs={12}>
          <Grid
            className=""
            sx={{ p: "50px 0px 0px 0px" }}
            container
            rowGap={1}
            columnGap={2}
          >
            <Grid
              // animate={{ x: 50 }}
              // transition={{ delay: 0.1 }}
              className="signup-animation-box1"
              item
              sx={{ p: "30px 0px 0px 0px" }}
              xs={5.9}
            >
              <Grid container>
                <Grid item className="breadcrumbs-signin" xs={12}>
                  <ArrowBackIosIcon />
                  <Metric onClick={() => navigate("/")}>Home</Metric>
                </Grid>
                <Grid sx={{ p: "50px 0px 0px 0px" }} item xs={12}>
                  <img
                    src="https://www.utmel.com/imgs/login/bg.png"
                    alt="Loading..."
                    className="signup-image"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid className="" sx={{ p: "0px 0px 50px 0px" }} item xs={5.9}>
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="signup-form"
              >
                <Typography sx={{ m: "0px 0px 10px 0px" }} variant="h3">
                  Sign Up
                </Typography>
                <Title>Personal Information</Title>
                <TextField
                  size="small"
                  className="input-singup"
                  label="Email"
                  error={emailError}
                  type="email"
                  helperText={emailError === true ? "Email already Exist" : " "}
                  required
                  onChange={(e) => setemail(e.target.value)}
                />
                <TextField
                  className="input-singup"
                  label="User Name"
                  type="text"
                  size="small"
                  helperText={" "}
                  required
                  onChange={(e) => setusername(e.target.value)}
                />
                <TextField
                  className="input-singup"
                  label="Password"
                  type="password"
                  size="small"
                  error={passwordError}
                  helperText={
                    passwordError === true
                      ? "Password must be atleast 8 charcters long including lower case upper case, special characters  and numbers"
                      : " "
                  }
                  required
                  onChange={(e) => setpassword(e.target.value)}
                />
                <TextField
                  size="small"
                  className="input-singup"
                  label="Confirm Password"
                  type="password"
                  error={confirmPasswordError}
                  required
                  helperText={
                    confirmPasswordError === true
                      ? "Password Didn't match"
                      : " "
                  }
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
               
                <Title>Company Name</Title>
                <TextField
                  size="small"
                  className="input-singup"
                  label="Company Name"
                  required
                  helperText={" "}
                  onChange={(e) => setcompanyName(e.target.value)}
                />
                <Autocomplete
                  onChange={(event, value) =>
                    setCountary(value.label, "countaryName")
                  }
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
                      helperText={" "}
                      label="Choose a country"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
                <TextField
                  className="input-singup"
                  label="Address"
                  required
                  size="small"
                  helperText={" "}
                  onChange={(e) => setAddress(e.target.value)}
                  type="address"
                />
                <Button
                  className="btn-signin"
                  // variant="contained"
                  // color="primary"
                  type="submit"
                >
                  Signup
                </Button>
              </form>
              <div className="sign-options">
                <strong>Have an account?</strong>
                <Button>
                  <Link className="whiteColorText" to={"/login"}>
                    Login
                  </Link>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
