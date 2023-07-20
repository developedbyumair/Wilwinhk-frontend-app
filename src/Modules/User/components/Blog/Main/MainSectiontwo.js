import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainSectionTwoCards from "./MainSectionTwoCards";

function MainSectiontwo({ DataSet }) {
  // console.log(DataSet, "DataSet again");
  // const [SortedData, setSortedData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  function handlePageChange(event, newPage) {
    // console.log(newPage, "newPage");
    setCurrentPage(newPage);
  }
  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    // console.log(newRowsPerPage, "newRowsPerPage");
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };
  useEffect(() => {
    // const sort = () =>{
    //    const sortedData = [...DataSet].sort((a, b) => {
    //      const dateA = new Date(a.date);
    //      const dateB = new Date(b.date);
    //      return dateA - dateB;
    //    });
    //  const sortedData = sortBy(response.data, ["date"]);
    //  console.log(sortedData, "sortedData see meee");
    //  setSortedData(sortedData);
    // }
    // sort()
  }, []);

  return (
    <div>
      <Grid
        className="blog-main-sectionTwo"
        container
        rowGap={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} className="itemOne">
          <Grid
            container
            rowGap={2}
            columnGap={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {DataSet?.length !== 0 &&
              DataSet?.slice(
                (currentPage - 1) * rowsPerPage,
                currentPage * rowsPerPage
              ).map((e, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={5.8}
                    md={3.8}
                    lg={3.8}
                    xl={3.8}
                    key={i}
                  >
                    <MainSectionTwoCards DataSet={e} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
        <Grid item xs={12} className="itemTwo">
          <Pagination
            className=""
            count={Math.ceil(DataSet.length / rowsPerPage)}
            color="primary"
            page={currentPage}
            rowsPerPage={rowsPerPage}
            onChange={handlePageChange}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainSectiontwo;
