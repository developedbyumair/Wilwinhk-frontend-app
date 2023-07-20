import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FetchBlogSingle } from "../../../../../Store/API/FetchBlog";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Metric } from "@tremor/react";

function SingleBlog() {
  
    const user = useSelector(state=>state.user);
    const {id} = useParams();
    const [BlogData, setBlogData] = useState({})
    console.log(id, "id");
    useEffect(() => {
      const fetch = async() =>{
          try {
          const res = await FetchBlogSingle(id,user.userToken);
          console.log(res.data,"res");
          setBlogData(res.data.blogs);
        } catch (error) {
          console.log(error);
        }

      }
      fetch()
    }, [])
    
  return (
    <div>
      {Object.keys(BlogData).length > 0 && (
        <Card>
          <Grid
            container
            rowGap={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={11.5}>
              <Metric
                className="uppercase-text"
                style={{ textAlign: "center" }}
              >
                {BlogData.title}
              </Metric>
            </Grid>
            <Grid item xs={11.5}>
              <div
                className="singleblog-my-container"
                dangerouslySetInnerHTML={{ __html: BlogData.description }}
              />
            </Grid>
          </Grid>
        </Card>
      )}
    </div>
  );
}

export default SingleBlog;
