import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../App.css";
import IMG1 from "../assets/images/100-Most-Inspirational-Fashion-Quotes-Ever-18.jpg";
import IMG2 from "../assets/images/220125-amazon-fashion-finds-vl-2x1.webp";

export default function () {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block Slide"
        itemId={1}
        src={IMG1}
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block Slide"
        itemId={2}
        src={IMG2}
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
