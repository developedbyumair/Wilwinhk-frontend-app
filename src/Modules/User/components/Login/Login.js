import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  loginAccessToken,
  loginSuccess,
} from "../../../../Store/Features/userSlice";
import { Metric, Title } from "@tremor/react";
function Login() {
  const MySwal = withReactContent(Swal);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(userInfo,"userInfo");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      setEmailError(false);
      setPasswordError(false);
      const data = {
        email,
        password,
      };
      // console.log(data, "formData");
      if (data) {
        try {
          const res = await axios.post(
            "http://3.7.46.114:8000/api/v1/login",
            data
          );
          // console.log(res.data, "responseData");
          if (res.data.message === "please verify your mail...") {
            MySwal.fire({
              icon: "error",
              title: "Verify Account",
              text: "Please verify account for login",
            });
          }
          if (res.data.authToken) {
            dispatch(loginAccessToken({ authtoken: res.data.authToken }));
            setEmailError(false);
            setPasswordError(false);
            console.log("into");
            const fetch = await axios.get(
              "http://3.7.46.114:8000/api/v1/getUserDetails",
              {
                headers: {
                  auth: res.data.authToken,
                },
                withCredentials: true,
              }
            );
            // console.log(fetch.data, "fetchData");
            dispatch(loginSuccess(fetch.data.user));
            navigate("/");
          }
        } catch (error) {
          setErrorMessage(error.response.data);
          // console.log(error.response, "responseData");
          if (
            error.response?.data.error ===
            "Please login with correct credentials."
          ) {
            setEmailError(true);
          }
        }
        // error.response?.data.error.map((e)=>{
        //   if (e.msg === "Password is required") {
        //     setPasswordError(true);
        //   }
        // })
      }
    } else if (email === "") {
    } else if (password === "") {
    } else {
    }
  };
  return (
    <div className="signup-container">
      <Grid container className="" spacing={2}>
        <Grid
          sx={{ m: "30px 0px 0px 0px", cursor: "pointer" }}
          item
          className="breadcrumbs-signin"
          xs={12}
          onClick={() => navigate("/")}
        >
          <ArrowBackIosIcon />
          <Metric>Home</Metric>
        </Grid>
        <Grid item className="" xs={12}>
          <Grid className="" container rowSpacing={1} columnSpacing={2}>
            <Grid className="" item xs={6}>
              <img
                src="https://www.utmel.com/imgs/login/bg.png"
                alt="Loading..."
                className="signup-image"
              />
            </Grid>
            <Grid className="" item xs={6}>
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="signup-form"
              >
                <Typography sx={{ m: "0px 0px 20px 0px" }} variant={"h3"}>
                  Log in
                </Typography>
                <Title>Personal Information</Title>
                <TextField
                  autoComplete="off"
                  className="input-singup"
                  label="Email"
                  sx={{ m: "10px 0px" }}
                  type="email"
                  required
                  error={emailError}
                  helperText={
                    emailError
                      ? "You have entered wrong password, please try again!"
                      : ""
                  }
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  autoComplete="off"
                  type="password"
                  helperText={
                    passwordError
                      ? "You have entered wrong password, please try again!"
                      : ""
                  }
                  error={passwordError}
                  className="input-singup"
                  label="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link to={"/forgotpassword"}>Forget Password ?</Link>
                <Button
                  className="btn-signin"
                  variant="contained"
                  color="primary"
                  type="submit"
                  startIcon={<LockOpenIcon />}
                >
                  Login
                </Button>
                <div className="sign-options">
                  <strong>Don't have an account?</strong>
                  <Button variant="contained" size="small">
                    <Link className="whiteColorText" to={"/signup"}>
                      Signup
                    </Link>
                  </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
