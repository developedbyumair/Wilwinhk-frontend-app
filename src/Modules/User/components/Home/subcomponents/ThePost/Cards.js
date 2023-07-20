import { ReadMoreRounded } from '@mui/icons-material';
import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <Grid
      container
      justifyContent={"flex-start"}
      alignItems={"center"}
      className="post-card"
      columnGap={1}
    >
      <Grid item className="post-card-itemOne" xs={3}>
        <img
          src="https://res.utmel.com/Images/Article/1c68bcb6-6b22-4166-b411-182e138326dc.png"
          alt="loading"
        />
      </Grid>
      <Grid item xs={8} className="post-card-itemTwo">
        <Grid container>
          <Grid item xs={12}>
            <span>FT234XD-R USB: Pinout, Block Diagram, Alternatives</span>
          </Grid>
          <Grid item xs={12}>
            <p>
              The FT234XD-R is a USB to serial UART interface with optimised
              packaging (3mm x 3mm 12 pins DFN) for smaller PCB design
            </p>
          </Grid>
          <Grid item xs={12}>
            <Link className="post-card-itemTwo-itemsLink">
              Read More <ReadMoreRounded />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cards