import { Grid } from "@mui/material";
import { Button, TextInput } from "@tremor/react";
import React, { useEffect, useState } from "react";
import { FetchAllProducts } from "../../../../Store/API/fetchProducts";
import TableData from "./TableData";
import { Noitems, Tables } from "../../../../common";
import { useParams } from 'react-router-dom';
import { HeadingOfTables } from "../../../../Utility/Categories/Categories";
function Search() {
  const [SearchBar, setSearch] = useState();
  const [SearchBarparams, setSearchBarparams] = useState();
   let { name } = useParams();
  const [searchComplete, setSearchComplete] = useState([]);
  useEffect(() => {
    const SearchBar = async() => {
      if (SearchBar) {
        // return
      }
      try {
      const res = await FetchAllProducts();
      // console.log(name,"searchkey");
      if (name && res.length !== 0) {
        let searching = res.filter(
            (item) =>
              item?.subCategory[0].name.toLowerCase().includes(name) ||
              item?.title.toLowerCase().includes(name) ||
              item?.mfrNo.toLowerCase().includes(name)
              )
              // console.log(searching, "searching");
              if (searching.length !== 0) {
                setSearchBarparams(searching);
              }
            }
      } catch (log) {
        
      }
    }
    SearchBar();
  }, [])
  
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await FetchAllProducts();
      // console.log(res, "data");
      if (res.length !== 0) {
        if (SearchBar) {
          // let searchedData = res.filter(
          //   (item) =>
          //     item?.subCategory !== undefined ||
          //     item?.title !== undefined ||
          //     item?.mfrNo !== undefined
          // );
          let searches = res.filter(
            (item) =>
              item?.subCategory.toLowerCase().includes(SearchBar) ||
              item?.title.toLowerCase().includes(SearchBar) ||
              item?.mfrNo.toLowerCase().includes(SearchBar)
          );
          if (searches.length !== 0) {
            setSearchComplete(searches);
          }
        } else {
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid
      className="SearchPage"
      container
      rowGap={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={6}>
        <form className={"search-itemOne"} onSubmit={handleSearch}>
          <TextInput
            placeholder=""
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
            required
          />
          <Button type="submit">Search</Button>
        </form>
      </Grid>
      <Grid item xs={11.5}>
        {searchComplete.length !== 0 ? (
          <Tables columns={HeadingOfTables} tableData={searchComplete} />
        ) : (
          <Tables columns={HeadingOfTables} tableData={SearchBarparams} />
        )}
      </Grid>
    </Grid>
  );
}

export default Search;
