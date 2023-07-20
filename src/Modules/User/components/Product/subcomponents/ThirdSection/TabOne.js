import { Grid } from '@mui/material'
import React from 'react'

function TabOne() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <strong>Purchase</strong>
        <p>
          You may place an order without registering to Wilwinhk. We strongly
          suggest you sign in before purchasing as you can track your order in
          real time.
        </p>
      </Grid>
      <Grid item xs={12}>
        <strong>Means of Payment</strong>
        <p>
          For your convenience, we accept multiple payment methods in USD,
          including PayPal, Credit Card, and wire transfer.
        </p>
      </Grid>
      <Grid item xs={12}>
        <strong>RFQ (Request for Quotations)</strong>
        <p>
          It is recommended to request for quotations to get the latest prices
          and inventories about the part. Our sales will reply to your request
          by email within 24 hours.
        </p>
      </Grid>
      <Grid item xs={12}>
        <strong>IMPORTANT NOTICE</strong>
        <ol>
          <li>
            You'll receive an order information email in your inbox. (Please
            remember to check the spam folder if you didn't hear from us).
          </li>
          <li>
            Since inventories and prices may fluctuate to some extent, the sales
            manager is going to reconfirm the order and let you know if there
            are any updates.
          </li>
        </ol>
      </Grid>
    </Grid>
  );
}

export default TabOne