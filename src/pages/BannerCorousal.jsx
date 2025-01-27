import React from "react";
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
