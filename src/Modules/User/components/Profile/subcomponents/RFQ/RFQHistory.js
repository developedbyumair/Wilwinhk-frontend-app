import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Noitems, Tables } from "../../../../../../common";
import axios from "axios";
import RFQhistoryTable from "./RFQhistoryTable";
function RFQHistory() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://15.206.128.120:8000/api/v1/rqfHistory"
        );
        console.log(res, "response of rqf history");
        if (res.data.history) {
          const maps = res.data.history.filter((e) => {
            return e.products.length !== 0;
          });
          // console.log(maps);
          setdata(maps)
          // let datamap = maps.filter(e=>e)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {data.length !== 0 ? <RFQhistoryTable data={data} /> : <Noitems />}
        </Grid>
      </Grid>
    </div>
  );
}

export default RFQHistory;
