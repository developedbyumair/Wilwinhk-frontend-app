import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { HeadingOfTables } from "../../../../Utility/Categories/Categories";
// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "product", headerName: "Product", width: 230 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function TableCompare() {
  const compare = useSelector((state) => state.compare);
  const [columns, setcolumns] = useState([]);
  const [rows, setrows] = useState([]);
  useEffect(() => {
    const columnFun = () => {
      let data = HeadingOfTables.map((e, i) => {
        return { field: e, headerName: e, width: 200 };
      });
      console.log(data, "data");
      setcolumns(data);
    };

    // const rowFun = () => {
    //     let data = []
    //         data = compare.compare.map((e, i) => {
    //          return {
    //            id: 1,
    //            Product: "Snow",
    //            Inventory: "Jon",
    //            Pricing: 35,
    //            Pricing: 35,
    //         , Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35, Pricing: 35 };
    //        });
    // };
    // rowFun();
    columnFun();
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {columns.length !== 0 && (
        <DataGrid
          rows={rows}
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

export default TableCompare;
