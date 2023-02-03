import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../App.css";

export default function () {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block Slide"
        itemId={1}
        src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block Slide"
        itemId={2}
        src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
