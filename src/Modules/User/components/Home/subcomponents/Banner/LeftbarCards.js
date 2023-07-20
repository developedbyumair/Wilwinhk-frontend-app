import React, { useEffect, useState } from "react";
import { IconButton, Grid } from "@mui/material";
import { Subtitle, Title } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FetchAllProducts } from "../../../../../../Store/API/fetchProducts";
function LeftbarCards({ title }) {
  const navigate = useNavigate();
  const [first, setfirst] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const productsData = await FetchAllProducts();
        console.log(productsData, "productsData");
        console.log(title, "title");
        const filterData = productsData.filter(
          (item) => item.category[0].name === title
        );
        setfirst(filterData);
        // console.log(filterData, "filterData");
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <Grid container gap={1}>
      {first.length !== 0 ? (
        <Grid item xs={12}>
          <Grid className="leftcard-container" gap={3} container>
            <Grid
              item
              className={"items"}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
              xs={12}
            >
              <Title className="heading">{title}</Title>
              <IconButton>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid className="items-info" item xs={12}>
              <Grid
                container
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={1}
              >
                {first.map((e) => {
                  return (
                    <Grid item xs={5.7}>
                      <Subtitle
                        className="allcategories-subCategory"
                        onClick={() =>
                          navigate(`/categories/${e.subCategory[0].name}`)
                        }
                      >
                        {e.subCategory[0].name}
                      </Subtitle>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Title>No Products Found!</Title>
        </Grid>
      )}
    </Grid>
  );
}

export default LeftbarCards;
