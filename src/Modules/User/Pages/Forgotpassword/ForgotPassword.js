import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, TextInput } from "@tremor/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { updatePassword } from "../../../../Store/API/UpdatePassword";
function ForgotPassword() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const location = useLocation();
  const [NewPassword, setNewPassword] = useState();
  const [NewConfirmPassword, setNewConfirmPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    console.log(token);
    try {
      if (NewPassword === NewConfirmPassword) {
        let data = {
          password: NewPassword,
          confirmPassword: NewConfirmPassword,
        };
        const res = await updatePassword(data, token);
        // console.log(res,"response to update password");
        if (res.status === 200) {
          MySwal.fire({
            icon: "Success",
            title: "Password updated",
          });
          navigate("/login");
        }
        if (res.status === 400) {
          MySwal.fire({
            icon: "error",
            title: "Password must be 8 digits long containing small and capital alphabets with a unique charater",
          });
          navigate("/");
        }
      } else {
        MySwal.fire({
          icon: "error",
          title: "Password didn't matched",
        });
      }
    } catch (error) {}
  };
  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid sx={{ m: "30px 0px 0px 0px" }} item xs={11}>
          <form onSubmit={handleSubmit}>
            <Card>
              <Grid container rowGap={1}>
                <Grid item xs={12}>
                  <TextInput
                    onChange={(e) => {
                      e.preventDefault();
                      setNewPassword(e.target.value);
                    }}
                    placeholder="New Password"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    onChange={(e) => {
                      e.preventDefault();
                      setNewConfirmPassword(e.target.value);
                    }}
                    placeholder="Confirm Password"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type={"submit"}>Change Password</Button>
                </Grid>
              </Grid>
            </Card>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default ForgotPassword;
