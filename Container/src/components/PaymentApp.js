import React, { useRef, useEffect } from "react";
import { mount } from "paymentOptions/paymentApp";

const PaymentApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

export default PaymentApp;
