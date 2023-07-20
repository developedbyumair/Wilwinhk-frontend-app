import { Card, Grid, Typography } from "@mui/material";
import { Title } from "@tremor/react";
import React, { useEffect, useState } from "react";
import PopularParts from "./PopularParts";
import Main from "./Main/Main";
import Nav from "./Nav";
import { FetchBlog } from "../../../../Store/API/FetchAllBlogs";
import { useSelector } from "react-redux";
import Subscribtion from "./Subscribtion";

function ComponentsandParts() {
  const user = useSelector((state) => state.user);
  const [DataSet, setDataSet] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await FetchBlog(user.userToken);
        // console.log(res);
        let data = [...res.data.blogs].map((e) => {
          var parser = new DOMParser();
          var doc = parser.parseFromString(e.description, "text/html");
          const i = doc.getElementsByTagName("img");
          const imageUrls = Array.from(i).map((img) => img.src);
          // console.log(imageUrls, "i");
          return {
            id: e._id,
            title: e.title,
            user: e.user,
            description: e.description,
            date: e.date,
            images: imageUrls,
          };
        });
        setDataSet(data);
        // console.log(data,"data here");
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={11.5}>
          <Grid container gap={1}>
            <Grid item xs={9}>
              <Card sx={{ p: "20px", m: "0px 0px 20px 0px" }}>
                <Grid container gap={1}>
                  <Grid item xs={12}>
                    <Nav />
                  </Grid>
                  <Grid item xs={12}>
                    {DataSet.length !== 0 && <Main DataSet={DataSet} />}
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={2.9}>
              <Grid container rowGap={1}>
                <Grid item xs={12}>
                  <Subscribtion />
                </Grid>
                <Grid item xs={12}>
                  <Card sx={{ p: "10px", m: "0px 0px 20px 0px" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h5">Popular Parts</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <PopularParts />
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ComponentsandParts;
