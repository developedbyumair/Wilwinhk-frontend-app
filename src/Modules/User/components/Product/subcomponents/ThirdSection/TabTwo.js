import { Grid } from "@mui/material";
import React from "react";

function TabTwo() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <strong>Shipping Cost</strong>
        <p>
          Shipping starts at $40, but some countries will exceed $40. For
          example (South Africa, Brazil, India, Pakistan, Israel, etc.) The
          basic freight (for package ≤0.5kg or corresponding volume) depends on
          the time zone and country.
        </p>
      </Grid>
      <Grid item xs={12}>
        <strong>Shipping Method</strong>
        <p>
          Currently, our products are shipped through DHL, FedEx, SF, and UPS.
        </p>
      </Grid>
      <Grid item xs={12}>
        <strong>Delivery Time</strong>
        <p>
          Once the goods are shipped, estimated delivery time depends on the
          shipping methods you chose: FedEx International, 5-7 business days.
        </p>
      </Grid>
      <Grid item xs={12}>
        <table border={"1px solid"}>
          <thead>
            <tr>
              <th>Region</th>
              <th>Country</th>
              <th>Logistic Time (Day)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>America</td>
              <td>United States</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Euorpe</td>
              <td>United States</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Oceania</td>
              <td>United States</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Asia</td>
              <td>United States</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Middle East</td>
              <td>United States</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
}

export default TabTwo;
