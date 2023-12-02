import React from "react";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const BannerCmpt = () => {
  const Banner1 = require("../../assets/images/Oath 2nd Term.jpg");
  const Banner2 = require("../../assets/images/RD2023.jpg");
  const Banner3 = require("../../assets/images/zp members2.jpg");

  return (
    <Carousel
      showThumbs={false}
      showStatus
      infiniteLoop
      showIndicators={false}
      autoPlay={true}
      interval={3000}
      className="cursor-pointer"
      onClickCarouselItem={() => {}}
      showArrows={true}
    >
      {[Banner1, Banner2, Banner3].map((image, idx) => (
        <div key={"image-carosuel-" + idx}>
          <LazyLoadImage
            src={image}
            alt={"image-" + idx}
            className="d-flex cursor-pointer"
            effect="blur"
            style={{backgroundColor: 'red'}}
          />
          <div
            className="cursor-pointer"
            style={{
              backgroundColor: "#000",
              position: "absolute",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "600",
              top:'90% ',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              opacity: '0.6',
              height: '3rem'
            }}
          >
            {"Banner-" + (idx + 1)}
          </div>
        </div>
      ))}
    </Carousel>
  );
};
