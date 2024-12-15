import React from 'react';
import carousal1 from '../assets/images/carousal1.jpg';
import carousal2 from '../assets/images/carousal2.jpg';
import carousal3 from '../assets/images/carousal3.jpg';
import carousal4 from '../assets/images/carousal4.jpg';
import carousal5 from '../assets/images/carousal5.jpg';
import carousal6 from '../assets/images/carousal6.jpg';
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

          <img src={carousal1} alt="Slide 1" />
          <img src={carousal2} alt="Slide 2" />
          <img src={carousal3} alt="Slide 3" />
          <img src={carousal4} alt="Slide 4" />
          <img src={carousal5} alt="Slide 5" />
          <img src={carousal6} alt="Slide 6" />
        </Carousel>
      </div>
    </>
  );
}
