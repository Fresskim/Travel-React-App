import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./components//booking/Booking";
import ImgCarousel from "./components/carousel/ImgCarousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/views" element={<ImgCarousel />} />
    </Routes>
  </BrowserRouter>,
);
