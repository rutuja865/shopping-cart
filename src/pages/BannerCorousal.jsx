import React from "react";
import carousal1 from "../assets/images/carousal1.jpg";
import carousal2 from "../assets/images/carousal2.jpg";
import carousal3 from "../assets/images/carousal3.jpg";
import carousal4 from "../assets/images/carousal4.jpg";
import carousal5 from "../assets/images/carousal5.jpg";
import carousal6 from "../assets/images/carousal6.jpg";
import bannerimage1 from "../assets/images/Banner_image1.png"
import bannerimage2 from "../assets/images/Banner_image2.png"
import bannerimage3 from "../assets/images/Banner_image3.png"
import bannerimage4 from "../assets/images/Banner_image4.png"
import { Carousel } from "flowbite-react";

export const BannerCorousal = () => {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          New Arrivals
        </h2>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel controls={true} slideInterval={5000}>
          <img
            src={bannerimage1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <img
            src={bannerimage2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <img
            src={bannerimage3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <img
            src={bannerimage4}
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
    
        </Carousel>
      </div>
    </>
  );
};
