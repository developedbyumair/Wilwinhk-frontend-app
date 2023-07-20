import { Pagination, Stack } from '@mui/material';
import React from 'react'

function index() {
  return (
    <div className="indexHome-container">
      <div className="box">
        <Stack spacing={2} className="stack">
        Index: #
          <Pagination count={9} color="primary" className="pagination" />
        </Stack>
      </div>
    </div>
  );
}

export default index;