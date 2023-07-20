import { Card, Grid, IconButton } from "@mui/material";
import {Subtitle, Title} from "@tremor/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { FetchAllProducts } from "../../../../../Store/API/fetchProducts";
function Main({ Categ, setamount }) {
  const navigate = useNavigate();
  const [filteredProducts, setfilteredProducts] = useState([]);
  console.log(Categ, "Categ");
  console.log(filteredProducts, "Categ");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await FetchAllProducts();
        // console.log(response, "response i needed");
        if (response) {
          setamount(response);
          let data = []
          let datas = [];
          if (Categ?.length > 0) {
            const datafind = Categ?.map((item, index) => {
              return (datas = response?.filter((items) => {
                // console.log(items.category, "items.category");
                // return items.category.toLowerCase().includes(item.name) ;
                return item.name.includes(items.category[0].name);
              }));
            });
            const filtered = datafind.map((e, i) => {
              return (data = e.filter(
                (item, index, self) =>
                  self.findIndex((t) => t.subCategory === item.subCategory) ===
                  index
              ));
            });
            // console.log(filtered, "filtered");
            setfilteredProducts(filtered);

          }
        }
      } catch (error) {
        // console.log(error);
      }
    };
    fetchProducts();
  }, []);
  
  return (
    <Grid container gap={1} className="allcategories-main">
          {/* console.log(item, index); */}
      <Grid className="allcategories-main-item" item xs={12}>
        {filteredProducts?.map((item, index) => {

          return (
            <Card
              className="card"
              sx={{ m: "0px 5px 15px", p: "10px" }}
              key={index}
            >
              <Grid className="card-container" gap={3} container>
                <Grid
                  item
                  className="items-heading"
                  sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
                  xs={12}
                >
                {/* {console.log(item,"items")} */}
                  <Title>{item[0]?.category[0].name}</Title>
                  {/* <span>({item?.length})</span> */}
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid className="items-info" item xs={12}>
                  <Grid container justifyContent={"flex-start"} alignItems={"center"} gap={1}>
                    {item.map((e, i) => {
                      return (
                        <Grid item xs={5.7} sm={3.7}>
                          {/* {console.log(e,"e")} */}
                          <Subtitle
                            className="allcategories-subCategory"
                            onClick={() =>
                              navigate(`/categories/${e.subCategory[0].name}`)
                            }
                          >
                            {e.subCategory[0].name}
                          </Subtitle>
                          <span></span>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Main;
