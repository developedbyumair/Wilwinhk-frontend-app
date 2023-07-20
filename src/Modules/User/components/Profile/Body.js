import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import LeftBar from "./subcomponents/LeftBar";
import Main from "./subcomponents/Main";
import { BeforeFooterInfo, Breadcrumbs } from "../../../../common";
import Drawer from "../Drawer/Drawer";
import OrderStatus from "./subcomponents/OrderStatus/OrderStatus";
import RFQHistory from "./subcomponents/RFQ/RFQHistory";
import Favourite from "./subcomponents/Favourite";
import AddressManagement from "./subcomponents/AddressManagement";
function Body() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth, "windowWidth");
  const [Mains, setMains] = useState(1);
   useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
     window.addEventListener("resize", handleWindowResize);

   }, [])
   
   return (
     <React.Fragment>
       {windowWidth >= 1024 && (
         <>
           <Grid container rowGap={2} className="profile-container">
             <Grid item xs={12} className="breadcrumbs-spacing">
               <Breadcrumbs />
             </Grid>
             <Grid item xs={12}>
               <Grid
                 container
                 justifyContent={"center"}
                 alignItems={"flex-start"}
                 className="profile-itemTwo-container"
               >
                 <Grid className="itemTwo" item xs={3}>
                   <LeftBar className="itemTwo-leftbar" setMains={setMains} />
                 </Grid>
                 <Grid item xs={9} className="itemTwo">
                   {Mains === 1 && (
                     <Card className="itemTwo-card">
                       <Main />
                     </Card>
                   )}
                   {Mains === 2 && (
                     <Card className="itemTwo-card">
                       <OrderStatus />
                     </Card>
                   )}
                   {Mains === 3 && (
                     <Card className="itemTwo-card">
                       <RFQHistory />
                     </Card>
                   )}
                   {Mains === 4 && (
                     <Card className="itemTwo-card">
                       <Favourite />
                     </Card>
                   )}
                   {/* {Mains === 5 && (
                     <Card className="itemTwo-card">
                       <AddressManagement />
                     </Card>
                   )} */}
                 </Grid>
               </Grid>
             </Grid>
             <Grid item xs={12}>
               <BeforeFooterInfo />
             </Grid>
           </Grid>
           <Drawer />
         </>
       )}
       {windowWidth < 1024 && (
         <Grid container rowGap={2} className="profile-container">
           <Grid item xs={12} className="breadcrumbs-spacing">
             <Breadcrumbs />
           </Grid>
           <Grid item xs={12}>
             <Grid container className="profile-itemTwo-container">
               <Grid item xs={12} className="itemTwo">
                 <Card className="itemTwo-card">
                   <Main />
                 </Card>
               </Grid>
             </Grid>
           </Grid>
           <Grid item xs={12}>
             <BeforeFooterInfo />
           </Grid>
         </Grid>
       )}
     </React.Fragment>
   );
}

export default Body;
