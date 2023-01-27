import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../App.css";

export default function () {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block Slide"
        itemId={1}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block Slide"
        itemId={2}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block Slide"
        itemId={3}
        src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/12/winter-fashion-trends-2023-UNI.jpg?fit=2050%2C1100"
        alt="..."
      ></MDBCarouselItem>
    </MDBCarousel>
  );
}
