import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react'
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
function Breadscrumbs() {
  const location = useLocation() 
  const navigate = useNavigate() 
  const crumbs = location.pathname.split("/").filter(crum=>crum !== "")
  // console.log(crumbs , "crumbs");

  return (
    <div className="">
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          className="link-breadcrumbs"
          underline="hover"
          color="inherit"
          href="/"
        >
          <HomeIcon fontSize="medium" className="link-breadcrumbs" />
          <Typography>Home</Typography>
        </Link>
        {crumbs?.map((data) => {
          return (
            <Link
              className="typography-breadcrumbs"
              color="inherit"
              onClick={() => navigate(`/${data}`)}
            >
              <AccountTreeIcon fontSize="medium" />
              <Typography color="text.primary">{data}</Typography>
            </Link>
          );
        })}
        {/* <Typography color="text.primary">{active}</Typography> */}
      </Breadcrumbs>
    </div>
  );
}

export default Breadscrumbs