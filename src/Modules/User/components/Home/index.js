import React, { useEffect, useState } from "react";
import Banner from "./subcomponents/Banner/index";
import BannerDown from "./subcomponents/BannerDown/index";
import PreferentalZone from "./subcomponents/PreferentalZone/index";
import Sale from "./subcomponents/Sale";
import Manfacturer from "./subcomponents/Manfacturer";
import RecommendedParts from "./subcomponents/RecommendedParts";
import TheBlog from "./subcomponents/TheBlog";
import ThePost from "./subcomponents/ThePost/index";
import PartNumber from "./subcomponents/PartNumber/index";
import IndexHome from "./subcomponents/IndexHome/index";
import ExcellentSwiper from "./subcomponents/ExcelentSwiperHome/index";
import { BeforeFooterInfo } from "../../../../common";
import ResponsiveBanner from "./subcomponents/responsiveBanner/ResponsiveBanner";
function Index() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth, "windowWidth");
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="home-theme">
      {windowWidth >= 1024 ? (
        <>
          <Banner />
          <BannerDown />
          <PreferentalZone />
          {/* <Sale /> */}
          <Manfacturer />
          <RecommendedParts />
          <TheBlog />
          <ThePost />
          <PartNumber />
          {/* <IndexHome /> */}
          <ExcellentSwiper />
          <BeforeFooterInfo />
        </>
      ) : (
        <>
          <ResponsiveBanner />
          <PreferentalZone />
          {/* <Sale /> */}
          <Manfacturer />
          <RecommendedParts />
          <TheBlog />
          <ThePost />
          <PartNumber />
          <IndexHome />
          <ExcellentSwiper />
          <BeforeFooterInfo />
        </>
      )}
    </div>
  );
}

export default Index;
