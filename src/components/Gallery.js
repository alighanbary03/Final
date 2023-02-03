import React from "react";
// import Carousel from "react-grid-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewCard from "./NewCard";
import SingleCard from "./SingleCard";
const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
      <div>
        <SingleCard></SingleCard>
      </div>
    </Carousel>
  );
};

export default Gallery;
