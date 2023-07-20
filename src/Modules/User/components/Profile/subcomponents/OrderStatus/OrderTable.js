import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Product",
    width: 180,
  },
  {
    field: "mfr",
    headerName: "Manfacturer",
    width: 180,
  },

  {
    field: "mfrNo",
    headerName: "Manfacturer Number",
    width: 180,
  },
  {
    field: "qty",
    headerName: "Quantity",
    width: 180,
  },
];

function OrderTable({ OrderTableData }) {
  console.log(OrderTableData, "OrderTableData");
  const [Data, setData] = useState([]);
console.log(Data,"data");
  useEffect(() => {
    const filterData = () => {
      let array = [];
      OrderTableData.map((item) => {
        console.log(item, "e");
        item.products.map((e, i) => {
          console.log(e, "e enter");
          let count = 1;
          array.push({
            id: count + i,
            name: e.name,
            mfr: e.mfr,
            mfrNo: e.mfrNo,
            qty: e.quantity,
          });
        });
      });
      console.log(array, "array");
      if (array.length !== 0) {
        setData(array);
      }
    };
    filterData();
  }, []);

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
      {Data.length !== 0 && (
        <DataGrid
          rows={Data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          editMode={true}
        />
      )}
    </div>
  );
}

export default OrderTable;
