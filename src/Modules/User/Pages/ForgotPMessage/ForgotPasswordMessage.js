import { Grid } from "@mui/material";
import { Button, Card, TextInput } from "@tremor/react";
import React, { useState } from "react";
import { forgotPassword } from "../../../../Store/API/ForgotPassword";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function ForgotPasswordMessage() {
  const MySwal = withReactContent(Swal);
  const [email, setemail] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        let data = {
          email: email,
        };
        const res = await forgotPassword(data);
        console.log(res, "response to forgot password");
        if (res.status === 200) {
          MySwal.fire({
            icon: "success",
            title: "Check your email",
            text: "Please check your email for updating password",
          });
        }
        if (res.response.status === 404) {
          MySwal.fire({
            icon: "error",
            title: "User not found",
          });
        }
        if (res.response.status === 400) {
          MySwal.fire({
            icon: "error",
            title: "Email not found",
          });
        }
      }
    } catch (error) {
      // console.log(error.response);
    }
  };
  return (
    <div>
      <Card style={{ margin: "40px 0px 0px 0px" }}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={1}
          >
            <Grid item xs={9}>
              <TextInput
                onChange={(e) => {
                  e.preventDefault();
                  setemail(e.target.value);
                }}
                placeholder="Enter Email"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={9}>
              <Button type={"submit"}>Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}

export default ForgotPasswordMessage;
