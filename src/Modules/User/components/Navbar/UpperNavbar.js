import React from 'react'
import { Divider } from '@mui/material';
import { Subtitle } from '@tremor/react';
import MenuItems from '../../../../common/MenuItem/MenuItems';
import { useNavigate } from 'react-router-dom';
function UpperNavbar() {
  const navigate = useNavigate()
  const array = ["sales@wilwin-ic.com.", "wilwin@wilwin-ic.com", "85253495777"];
  return (
    <div className="UpperNav-container">
      <MenuItems buttonName={"Contact Us"} array={array} />
      <Divider orientation="vertical" flexItem />
      <Subtitle onClick={() => navigate("/privacypolicy")}>
        Privacy Policy
      </Subtitle>
      <Divider orientation="vertical" flexItem />
      <Subtitle onClick={() => navigate("/terms")}>
        Terms and Conditions
      </Subtitle>
    </div>
  );
}

export default UpperNavbar