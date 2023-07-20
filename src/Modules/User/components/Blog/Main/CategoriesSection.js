import { Box, Grid, Skeleton } from "@mui/material";
import { Subtitle } from "@tremor/react";
import React, { useEffect, useState } from "react";
import { FetchBlog } from "../../../../../Store/API/FetchAllBlogs";
import { useSelector } from "react-redux";

function CategoriesSection({ setCategoryData, DataSet }) {
  const user = useSelector((state) => state.user);
  const [CategoryName, setCategoryName] = useState([]);
  // console.log(CategoryName, "CategoryName");
  useEffect(() => {
    const fetchCategories = async () => {
      let array = [];
      DataSet.map((e) => {
        array.push(e.category);
      });
      const uniqueArray = [...new Set(array)];
      setCategoryName(uniqueArray);
        console.log(uniqueArray, "array");
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Grid
        container
        gap={1}
        className=""
        // justifyContent={"center"}
        // alignItems={"center"}
      >
        <Grid item xs={2.9}>
          <Subtitle
            onClick={() => setCategoryData()}
            style={{ cursor: "pointer" }}
          >
            ALL
          </Subtitle>
        </Grid>
        {CategoryName.length !== 0 &&
          CategoryName.map((e) => {
            return (
              <Grid item xs={2.9} className="">
                <Subtitle
                  onClick={() => setCategoryData(e)}
                  style={{ cursor: "pointer" }}
                >
                  {e}
                </Subtitle>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default CategoriesSection;
