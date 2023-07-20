import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
function LowerNavbar() {
  const navigate = useNavigate();
  const user = useSelector(state=>state?.user)
  return (
    <div className="lowerNav-container">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/categories")}
        className="lowerNav-box1"
      >
        <MenuRoundedIcon />
        <p>All Products</p>
      </div>
      <div className="lowerNav-box2">
        <span onClick={() => navigate("/manfacturer")}>Manfacturer</span>
        <span onClick={() => navigate(user?.currentUser ? "/rfq" : "/login")}>
          RFQ
        </span>
        <span onClick={() => navigate("/blog")}>Blogs & Posts</span>
        {/* <span onClick={() => navigate()}>Support</span> */}
        <span onClick={() => navigate("/about")}>
          About
        </span>
        {/* <span onClick={() => navigate("/blog")}>Blog</span> */}
        <span onClick={() => navigate("/contact")}>Contact Us</span>
        <span onClick={() => navigate("/certification")}>Certification</span>
      </div>
    </div>
  );
}

export default LowerNavbar;
