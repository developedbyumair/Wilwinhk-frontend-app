import React from "react";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  Title,
  Text,
  TextInput,
} from "@tremor/react";
import { HeadingOfTables } from "../../../../Utility/Categories/Categories";
import Product from "../Cart/Table/Product";
function TableData({ searchComplete }) {
  // console.log(searchComplete, "searchComplete");
  return (
    <div>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>
                <Title>Product</Title>
              </TableHeaderCell>
              {HeadingOfTables.map((e, i) => {
                return (
                  <>
                    <TableHeaderCell className="" key={i}>
                      <Title style={{ margin: "auto" }}>{e}</Title>
                    </TableHeaderCell>
                  </>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {searchComplete?.length !== 0 &&
              searchComplete?.map((item) => (
                <TableRow key={item._id}>
                  {console.log(item.mfrNo)}
                  <TableCell className="text-left">
                    <Product productInfo={item} />
                  </TableCell>
                  <TableCell>
                    <Text className="">
                      {item.inventory ? item.inventory : "-"}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.price ? item.price : "-"}</Text>
                  </TableCell>
                  <TableCell>
                    <TextInput
                      placeholder="Min 1"
                      disabled={false}
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Text>DataSheet</Text>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default TableData;
