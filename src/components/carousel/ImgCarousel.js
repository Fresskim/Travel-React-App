import React from "react";
import "./ImgCarouselStyles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import Venice from "../../assets/venice.jpg";
import Rome from "../../assets/rome.jpg";
import Paris from "../../assets/paris.jpg";
import Mauritius from "../../assets/mauritius.jpg";
import Egypt from "../../assets/egypt.jpg";
import Prague from "../../assets/prague.jpg";
import Greece from "../../assets/greece.jpg";
import London from "../../assets/london.jpg";
import Dubai from "../../assets/dubai.jpg";

function ImgCarousel() {
  let path = window.location.pathname;

  return (
    <>
      <div>{path == "/views" ? <Navbar /> : ""}</div>

      <div
        className="container viewsContainer"
        style={
          path == "/views"
            ? { maxWidth: "100%", backgroundColor: "#f2f2f2" }
            : { width: "100%" }
        }>
        <Carousel
          interval={2000}
          className="carousel"
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}>
          <div>
            <img src={Venice} alt="/" />
            <p className="legend">Venice</p>
          </div>
          <div>
            <img src={Rome} alt="/" />
            <p className="legend">Rome</p>
          </div>
          <div>
            <img src={Paris} alt="/" />
            <p className="legend">Paris</p>
          </div>
          <div>
            <img src={Greece} alt="/" />
            <p className="legend">Greece</p>
          </div>
          <div>
            <img src={Prague} alt="/" />
            <p className="legend">Prague</p>
          </div>
          <div>
            <img src={Egypt} alt="/" />
            <p className="legend">Egypt</p>
          </div>
          <div>
            <img src={Mauritius} alt="/" />
            <p className="legend">Mauritius</p>
          </div>
          <div>
            <img src={London} alt="/" />
            <p className="legend">London</p>
          </div>
          <div>
            <img src={Dubai} alt="/" />
            <p className="legend">Dubai</p>
          </div>
        </Carousel>
      </div>

      <div>{path == "/views" ? <Footer /> : ""}</div>
    </>
  );
}

export default ImgCarousel;
