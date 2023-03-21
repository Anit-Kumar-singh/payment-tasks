import React, { useRef, useEffect } from "react";
import { mount } from "header/headerApp";

const HeaderApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};

export default HeaderApp;
