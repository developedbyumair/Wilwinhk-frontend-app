import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  List,
  ListItemButton,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MainSectionOne from "./MainSectionOne";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainSectiontwo from "./MainSectiontwo";
import { Title } from "@tremor/react";
import CategoriesSection from "./CategoriesSection";
function Main({ DataSet }) {
  const [CategoryData, setCategoryData] = useState();
  const [filteredDataSet, setfilteredDataSet] = useState([]);
  // console.log(CategoryData, "CategoryData");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth, "windowWidth");
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    const filter = () => {
      const filteredData = DataSet.filter((e) => e.category === CategoryData);
      // console.log(filteredData, "filteredData");
      setfilteredDataSet(filteredData);
    };
    filter();
  }, [DataSet, CategoryData]);
  return (
    <div>
      <Grid container gap={2}>
        {/* windowWidth >= 1024 && (
          <Grid item xs={12} sx={{ m: "20px 0px 0px 0px" }}>
            <MainSectionOne />
          </Grid>
        ) */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Title>All Categories</Title>
                </AccordionSummary>
                <AccordionDetails>
                  <CategoriesSection
                    setCategoryData={setCategoryData}
                    DataSet={DataSet}
                  />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Divider></Divider>
        </Grid> */}
        <Grid item xs={12}>
          {filteredDataSet.length !== 0 ? (
            <MainSectiontwo DataSet={filteredDataSet} />
          ) : (
            <MainSectiontwo DataSet={DataSet} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
