import { Box, Card, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PopularParts from "./PopularParts";
import Main from "./Main/Main";
import Nav from "./Nav";
import { FetchBlog } from "../../../../Store/API/FetchAllBlogs";
import { useSelector } from "react-redux";
import Subscribtion from "./Subscribtion";

function Blog() {
  const user = useSelector((state) => state.user);
  const [arrayData,setArrayData]= useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth, "windowWidth");
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await FetchBlog(user.userToken);
        // console.log(res, "response of blogs");
        let filteredData = res.data.blogs.filter(
          (item) => item.blogType === "Blog"
        );
        console.log(filteredData, "filteredData");
        if (filteredData.length !== 0) {
          let infoData = [];
          filteredData?.map((e) => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(e.description, "text/html");
            const i = doc.getElementsByTagName("img");
            const imageUrls = Array.from(i).map((img) => img.src);
            // console.log(imageUrls, "i");
            infoData.push({
              id: e._id,
              title: e.title,
              user: e.user,
              category: e.category,
              description: e.description,
              date: e.date,
              images: imageUrls,
              views: e.views,
            });
          });
          console.log(infoData, "infoData");
          setArrayData(infoData);
        }
      } catch (error) {
        // console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      {windowWidth >= 1024 && (
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={11.5}>
            <Grid container gap={1}>
              <Grid item xs={9}>
                <Card sx={{ p: "20px", m: "0px 0px 20px 0px" }}>
                  <Grid container gap={1}>
                    <Grid item xs={12}>
                      <Nav />
                    </Grid>
                        {/* <h1>hello</h1> */}
                    <Grid item xs={12}>
                      {arrayData.length !== 0 ? (
                        <Main DataSet={arrayData} />
                      ) : (
                        <Box sx={{ width: "100%" }}>
                          <Skeleton />
                          <Skeleton animation="wave" />
                          <Skeleton animation={"wave"} />
                        </Box>
                      )}
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
      )}
      {windowWidth < 1024 && (
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={11.5}>
            <Card sx={{ p: "20px", m: "0px 0px 20px 0px" }}>
              <Grid container gap={1}>
                <Grid item xs={12}>
                  <Nav />
                </Grid>
                <Grid item xs={12}>
                  {
                    {
                      /* arrayData.length !== 0 ? (
                    <Main DataSet={arrayData} />
                  ) : (
                    <Box sx={{ width: "100%" }}>
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={"wave"} />
                    </Box>
                  ) */
                    }
                  }
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Blog;
