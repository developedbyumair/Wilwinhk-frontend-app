import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
function RFQhistoryTable({ data }) {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "part", headerName: "Part Number", width: 190 },
    { field: "manfacturer", headerName: "Manfacturer", width: 190 },
    { field: "quantity", headerName: "Quanatity", width: 190 },
  ];
  console.log(data);
  const [Row, setRow] = useState([]);
  // console.log(Row, "Row");
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    const fetch = async () => {
      let array = [];
      data.map((e, i) => {
        e.products.map((item, index) => {
          //  return console.log(item,"item");
          array.push({
            id: 1 + i,
            part: item.partNumber,
            manfacturer: item.mfr,
            quantity: item.qty,
          });
        });
        console.log(array, "array");
        setRow(array);
      });
    };
    fetch();
  }, []);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        overflow: "hidden",
        p: "10px",
        m: "0px 0px 20px 0px",
      }}
    >
      {Row.length !== 0 && (
        <DataGrid
          rows={Row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      )}
    </div>
  );
}

export default RFQhistoryTable;
//  {
//    data?.length !== 0 && (
//      <Paper elevation={0} sx={{ width: "100%", overflow: "hidden" }}>
//        <TableContainer sx={{ maxHeight: 440 }}>
//          <Table stickyHeader aria-label="sticky table">
//            <TableHead sx={{ backgroundColor: "white" }}>
//              <TableRow>
//                <TableCell align="start">
//                  <TableHeaderCell className="" key={"index"}>
//                    <Title>Manfacturer</Title>
//                  </TableHeaderCell>
//                </TableCell>
//                <TableCell align="start">
//                  <TableHeaderCell className="" key={"index"}>
//                    <Title>Past Number</Title>
//                  </TableHeaderCell>
//                </TableCell>
//                <TableCell align="start">
//                  <TableHeaderCell className="" key={"index"}>
//                    <Title>Quantity</Title>
//                  </TableHeaderCell>
//                </TableCell>
//              </TableRow>
//            </TableHead>
//            <TableBody>
//              {Row?.length !== 0 &&
//                Row?.map((item) => (
//                  <TableRow key={item._id}>
//                    <TableCell align="start">
//                      <Text className="">{item.mfr ? item.mfr : "-"}</Text>
//                    </TableCell>
//                    <TableCell align="start">
//                      <Text>{item.partNumber ? item.partNumber : "-"}</Text>
//                    </TableCell>
//                    <TableCell align="start">
//                      <Text>{item.qty ? item.qty : "-"}</Text>
//                    </TableCell>
//                  </TableRow>
//                ))}
//            </TableBody>
//          </Table>
//        </TableContainer>
//        <TablePagination
//          rowsPerPageOptions={[10, 25, 100]}
//          component="div"
//          count={data.length}
//          rowsPerPage={rowsPerPage}
//          page={page}
//          onPageChange={handleChangePage}
//          onRowsPerPageChange={handleChangeRowsPerPage}
//        />
//      </Paper>
//    );
//  }
