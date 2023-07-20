import React, { useEffect, useState } from "react";
import { TextInput } from "@tremor/react";
import { useParams } from "react-router-dom";
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
} from "@tremor/react";
import { FetchAllProducts } from "../../../../../../Store/API/fetchProducts";
import { HeadingOfTables } from "../../../../../../Utility/Categories/Categories";
import Product from "../Table/subcomponents/Product";
import { Tables } from "../../../../../../common";

function AnotherTable() {
  const { name } = useParams();
  const [subCategories, setsubCategories] = useState([]);
  console.log(HeadingOfTables.length, "HeadingOfTables.length");
  console.log(subCategories, "subCategories");
  useEffect(() => {
    const fetchallproducts = async () => {
      try {
        const res = await FetchAllProducts();
        // console.log(res, "response res");
        if (res) {
          const filterSub = await res.filter(
            (e, i) => e.subCategory[0].name === name
          );
          setsubCategories(filterSub);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchallproducts();
  }, []);

  return (
    <div>
      {subCategories.length !== 0 && (
        <Tables tableData={subCategories} columns={HeadingOfTables} />
      )}
    </div>
  );
}
// columns, tableData;
export default AnotherTable;
