import { Grid, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Subtitle, Text, Title } from "@tremor/react";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
function MainSectionTwoCards({ DataSet }) {
  console.log(DataSet, "DataSet again again");
  const navigate = useNavigate();
  return (
    <div>
      <Grid contaienr spacing={0} className="main-section-two-cards">
        <Grid item className="itemOne" xs={12}>
          <img
            className="image-card-main"
            src={
              DataSet?.images?.length !== 0
                ? DataSet.images[0]
                : "https://images.all-free-download.com/images/graphiclarge/images_sign_template_flat_contrast_black_white_geometric_mountain_moon_outline_6921759.jpg"
            }
            alt="loading"
          />
        </Grid>
        <Grid item className="itemTwo" xs={12}>
          <Grid container className="itemTwo-container">
            <Grid item className="itemOne" xs={12}>
              <Title
                style={{ pointer: "cursor" }}
                onClick={() => navigate(`/blog/${DataSet?.id}`)}
                className="uppercase-text cut-text"
              >
                {DataSet?.title}
              </Title>
            </Grid>
            <Grid item className="itemtwo" xs={12}>
              <Subtitle className="sub-title">
                <Text className="cut-text">
                  {moment(DataSet.date).format("YYYY-MM-DD")}
                </Text>
              </Subtitle>
              <div className="info">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
                <Subtitle>
                  <Text className="cut-text">{DataSet?.views}</Text>
                </Subtitle>
              </div>
            </Grid>
            {/* <Grid item className="itemthree" xs={12}>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainSectionTwoCards;
