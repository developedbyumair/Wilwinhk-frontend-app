import { Grid } from "@mui/material";
import { Card, Metric, Title } from "@tremor/react";
import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getVerification } from "../../../../Store/API/GetVerification";
function VerifiedAccount() {
  const location = useLocation();
  // const {token} = useParams()
  useEffect(() => {
    const verified = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");
        const response = await getVerification(token);
        if (response.status === 200) {
        }
        // console.log(response, "response to verify");
      } catch (error) {
        console.log(error);
      }
    };
    verified();
  }, []);

  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid sx={{ m: "30px 0px 0px 0px" }} item xs={11}>
          <Card>
            <Grid container rowGap={1}>
              <Grid item xs={12}>
                <Metric>Your Account Has Been Verified!</Metric>
              </Grid>
              <Grid item xs={12}>
                <Title>
                  <Link to={"/login"}>Click here for login</Link>
                </Title>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default VerifiedAccount;
