import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { HeadingOfTables } from "../../../../Utility/Categories/Categories";
import Tables from "../../../../common/Tables/Tables";
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

function TableCom({ compares }) {
  const compare = useSelector((state) => state.compare);
  const [columns, setcolumns] = useState([]);
  const [rows, setrows] = useState([]);
  useEffect(() => {
    const columnFun = () => {
      let data = HeadingOfTables.map((e, i) => {
        return { field: e, headerName: e, width: 200 };
      });
      //   console.log(data, "data");
      setcolumns(data);
    };
    const rowFun = () => {
      let data = HeadingOfTables.map((e, i) => {
        return { field: e, headerName: e, width: 200 };
      });
      //   console.log(data, "data");
      setcolumns(data);
    };
    columnFun();
    rowFun();
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {columns.length !== 0 && (
        <Tables columns={HeadingOfTables} tableData={compares} />
      )}
    </div>
  );
}

export default TableCom;
