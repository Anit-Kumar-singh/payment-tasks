import React from "react";
import { Routes, Route } from "react-router-dom";
import Fundsubmit from "../pages/FundConfirmation/Fund.Confirmation";
import Home from "../pages/Home";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="payment-confirmation" element={<Fundsubmit />} />
    </Routes>
  );
};

export default Main;
