import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
function Sliders() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const sliderData = [
    "https://res.utmel.com/Images/Banner/33093229-a46c-4448-977b-37d85a144c67.jpg",
    "https://res.utmel.com/Images/Banner/58746192-98c8-49bd-99cf-adab38f64dcb.jpg",
    "https://res.utmel.com/Images/Banner/3b4cce16-e1e6-4b4e-84b5-52044b4b9dbf.png",
    "https://res.utmel.com/Images/Banner/86ac5eca-d9bb-4705-8051-bc6b89e58c96.jpg",
  ];

  return (
    <div styled={{height:"100%"}}>
      <AutoplaySlider
        play={true}
        className={"banner-slider-height"}
        cancelOnInteraction={true}
        organicArrows={true}
        bullets={false} // should stop playing on user interaction
        // buttons={true} // should stop playing on user interaction
        // interval={2000}
      >
        <div
          data-src={
            "https://res.utmel.com/Images/Banner/33093229-a46c-4448-977b-37d85a144c67.jpg"
          }
        />
        <div
          data-src={
            "https://res.utmel.com/Images/Banner/b8f70a3d-d4b4-4d45-af24-a8353842ac2a.jpg"
          }
        />
        <div
          data-src={
            "https://res.utmel.com/Images/Banner/3b4cce16-e1e6-4b4e-84b5-52044b4b9dbf.png"
          }
        />
        <div data-src={"https://i.imgur.com/gX8u0Ws.jpeg"} />
      </AutoplaySlider>
    </div>
  );
}

export default Sliders;
// <div className='slider'>
// <div className="slider-container">
//   <div className="slider-box">
//     <img src={sliderData[0]} alt="loading" />
//   </div>
//   <div className="slider-box">
//     <img src={sliderData[1]} alt="loading" />
//   </div>
//   <div className="slider-box">
//     <img src={sliderData[2]} alt="loading" />
//   </div>
//   <div className="slider-box">
//     <img src={sliderData[3]} alt="loading" />
//   </div>
// </div>
//   <div className="slider-left-div">
//     <ArrowBackIosRoundedIcon
//       sx={{ color: "white" }}
//       className="slider-left-icons"
//     />
//   </div>
//   <div className="slider-right-div">
//     <ArrowForwardIosRoundedIcon
//       className="slider-right-icons"
//       sx={{ color: "white" }}
//     />
//   </div>
// </div>
