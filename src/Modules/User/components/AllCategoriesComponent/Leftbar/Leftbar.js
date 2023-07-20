import {
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Bold, Subtitle, Title } from "@tremor/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Leftbar({ setCateg }) {
  const token = useSelector((state) => state.user.userToken);
  const [Categories, setCategories] = useState([]);
  // console.log(token);
  // * fetching data from here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://3.7.46.114:8000/api/v1/fetchCategories",
          {
            headers: {
              auth: token,
            },
            withCredentials: true,
          }
        );
        let cat = [];
        // console.log(res, "response category");
        cat = [...res.data.category].sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setCategories(cat);
        setCateg(cat);
        //  console.log(res.data.category, "res");
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, []);
  // * to here
  return (
    <Card>
      <Grid container justifyContent={"center"} alignItems={"center"} gap={1}>
        <Grid item sx={{ p: "20px 0px 10px 0px" }} xs={11.5}>
          <Title>Categories</Title>
        </Grid>
        <Grid item xs={12}>
          {Categories?.map((item, index) => {
            return (
              <div>
                <List sx={{ p: "0px" }}>
                  <ListItem sx={{ p: "0px" }}>
                    <ListItemButton sx={{ p: "10px" }}>
                      <ListItemText key={index} primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Card>
  );
}

export default Leftbar;
