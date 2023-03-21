import React from "react";
import PaymentApp from "./components/PaymentApp";
import "./App.css";
// import HeaderApp from "./components/HeaderApp";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      {/* <HeaderApp /> */}
      <Header />
      <PaymentApp />
    </>
  );
};

export default App;
