import React, { useState } from "react";
import { Bold, SelectBox, SelectBoxItem, Subtitle, Text } from "@tremor/react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import DescriptionIcon from "@mui/icons-material/Description";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import Avatar from "@mui/material/Avatar";
import {
  Badge,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import LOGO from "../../../../common/Images/wilwin logo/wilwin_logo-1-removebg-preview.png";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllProducts } from "../../../../Store/API/fetchProducts";
import { removeRFQLogOut } from "../../../../Store/Features/RFQSlice";
import { DeleteCart } from "../../../../Store/Features/cartSlice";
import { DeleteFav } from "../../../../Store/Features/favSlice";
import { fetchAllCategoriesLogOut } from "../../../../Store/Features/CategoriesProducts";
import { loginOut } from "../../../../Store/Features/userSlice";
import { persistor } from "../../../../Store/store";
import { DeleteCompare } from "../../../../Store/Features/compareSlice";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 11,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function MidNavbar() {
  const user = useSelector((state) => state?.user);
  // console.log(user, "user");
  const [Search, setSearch] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart?.quantity);
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await FetchAllProducts();
      if (res) {
        res.map((e) => {
          // console.log(Search, "data of ");
          // console.log(e.subCategory, "search ");
          if (Search === e.subCategory) {
            navigate(`/categories/${e.subCategory}`);
          }
          if (Search === e.mfrNo) {
            navigate(`/product/${e._id}`);
            // console.log(e._id, "search ");
          } else if (Search === e.title) {
            navigate(`/product/${e._id}`);
            // console.log(e._id, "search ");
          } else if (
            e?.title.toLowerCase().includes(Search) ||
            e?.mfrNo.toLowerCase().includes(Search) ||
            e?.subCategory[0].name.toLowerCase().includes(Search)
          ) {
            // console.log(Search, "search to lowercase");
            navigate(`/search/${Search}`);
          }
          // else{
          //   navigate(`/search/${Search}`);
          // }
        });
      }
      // console.log(res, "response of proucts");
    } catch (error) {
      console.log(error);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // navigate("/profile");
    setAnchorEl(false);
  };
  const handleLogOut = () => {
    // dispatch(removeRFQLogOut());
    // dispatch(loginOut());
    // dispatch(DeleteCart());
    // dispatch(DeleteFav());
    // dispatch(DeleteCompare());
    // dispatch(removeRFQLogOut());
    // dispatch(fetchAllCategoriesLogOut());
    persistor.purge().then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="midNav-container">
      <div className="midNav-boxOne">
        <img
          onClick={() => navigate("/")}
          className="img"
          src={LOGO}
          alt="loading"
        />
      </div>
      <form onSubmit={handleSearch} className="midNav-boxTwo">
        <div className="midNav-item1">
          {/* <div className="max-w-sm mx-auto space-y-6">
            <SelectBox
              onValueChange={(value) => console.log("the new value is", value)}
              defaultValue="1"
            >
              <SelectBoxItem value="1" text="Kilometers" />
              <SelectBoxItem value="2" text="Meters" />
              <SelectBoxItem value="3" text="Miles" />
              <SelectBoxItem value="4" text="Nautical Miles" />
            </SelectBox>
          </div> */}
        </div>

        <Divider orientation="vertical" flexItem />
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type={"onSubmit"} className="midNav-Searchicon">
          <SearchRoundedIcon />
        </button>
      </form>
      <div className="midNav-boxThree">
        <IconButton
          onClick={() => navigate("/cart")}
          color="primary"
          aria-label="shopping cart"
        >
          <StyledBadge badgeContent={cart?.length} color="primary">
            <ShoppingCartIcon className="icons-color" />
          </StyledBadge>
        </IconButton>
        <div className="midNav-boxThree-item">
          {user.currentUser !== null && (
            <>
              <Tooltip title="Account Settings">
                <IconButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  color="primary"
                  aria-label="person icon"
                >
                  <PersonIcon className="icons-color" />
                </IconButton>
              </Tooltip>

              <Text onClick={() => navigate("")}>
                <Bold
                  onClick={() => navigate("")}
                  style={{ cursor: "pointer" }}
                >
                  {user?.currentUser?.name}
                </Bold>
              </Text>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                sx={{ width: "320px" }}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },

                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div elevation={0} sx={{ width: 320, maxWidth: "100%" }}>
                  <MenuItem onClick={() => navigate("/profile")}>
                    <ListItemIcon fontSize="small">
                      <AccountCircleIcon />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => navigate("/profile")}>
                    <ListItemIcon>
                      <DescriptionIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Order History</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/profile")}>
                    <ListItemIcon>
                      <FilterFramesIcon fontSize="small" />
                    </ListItemIcon>{" "}
                    RFQ History
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/profile")}>
                    <ListItemIcon>
                      <FavoriteIcon fontSize="small" />
                    </ListItemIcon>
                    My Favourite
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </div>
              </Menu>
            </>
          )}
          {user.currentUser === null && (
            <div className="midNav-logout" onClick={() => navigate("/login")}>
              <IconButton
                onClick={() => navigate("/login")}
                color="primary"
                aria-label="person icon"
              >
                <PersonIcon className="icons-color" />
              </IconButton>
              <Text style={{cursor:"pointer"}}>
                <Bold>log in</Bold>
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MidNavbar;
