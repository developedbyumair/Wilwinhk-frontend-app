import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Tables } from "../../../../../../common";
import { GetSingleOrder } from "../../../../../../Store/API/FetchSingleOrder";
import OrderTable from "./OrderTable";
function OrderStatus() {
  const user = useSelector((state) => state.user);
  const [OrderTableData, setOrderTableData] = useState([])
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await GetSingleOrder(user.currentUser._id,user.userToken);
        console.log(response, "response to order");
        if (response.status === 200) {
          setOrderTableData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {OrderTableData.length !== 0 && (
            <OrderTable OrderTableData={OrderTableData} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderStatus;
