import React from "react";
import axios from "axios";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Title } from "@tremor/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline:"none",
  boxShadow: 24,
  p: 4,
};
function ChangePassword({ handleClosePassword }) {
  const user = useSelector((state) => state.user);
  const [password, setpassword] = useState();
  const [passwordError, setpasswordError] = useState(false);
  const [open, setopen] = useState(false);
  const [passwordConfirm, setpasswordConfirm] = useState();
  console.log(passwordConfirm, password, "passwordConfirm password");
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password) {
      console.log(user.currentUser.email, "user.currentUser.email");
      console.log(password, "password in event");
      try {
        const res = await axios.post(
          "http://15.206.128.120:8000/api/v1/updatePassword",
          {
            password: password,
          },
          {
            headers: {
              auth: user.userToken,
            },
            withCredentials: true,
          }
        );
        if (res.data.message === "Your password is updated successfully..") {
          setopen(true)
        }
        else{

        }
        console.log(res, "response to change password");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Card className="modifyData-profile">
      <form onSubmit={handleChangePassword}>
        <Grid
          container
          className="modifyData-profile-container"
          columnGap={1}
          rowGap={1}
        >
          <Grid sx={{ m: "10px 0px 0px 0px" }} className="itemOne" item xs={12}>
            <ChangeCircleIcon color="primary" />
            <Typography variant="h5">Change Password</Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField placeholder="" fullWidth label="Old Password" />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              placeholderg=""
              helperText={
                passwordError === true
                  ? "Password should be at least 8 letters long with"
                  : ""
              }
              error={passwordError}
              value={password}
              onChange={(e) => {
                e.preventDefault();
                setpassword(e.target.value);
              }}
              label="New Password"
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={5.9}>
            <TextField
              placeholder=""
              label="Confirm new Password"
              value={passwordConfirm}
              onChange={(e) => {
                e.preventDefault();
                setpasswordConfirm(e.target.value);
              }}
              fullWidth
            />
          </Grid> */}
          <Grid className="itemEight" item xs={2.9}>
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </Grid>
          <Grid className="itemEight" item xs={5.9}>
            <Button color="error" variant="contained">
              Cancel
            </Button>
          </Grid>
        </Grid>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Title
              onClick={() => setopen(false)}
              id="modal-modal-description"
              style={{ margin: "5px 0px 10px 0px" }}
            >
              Password Updated Successfully
            </Title>
            <Button
              onClick={() =>{ setopen(false)
              handleClosePassword(false)}}
              color="error"
              variant="contained"
            >
              Close
            </Button>
          </Box>
        </Modal>
      </form>
    </Card>
  );
}

export default ChangePassword;
