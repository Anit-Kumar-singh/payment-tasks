import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./app";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

// delelopment or production
if (process.env.NODE_ENV === "development") {
  const findEl = document.querySelector("#funding-root");
  if (findEl) {
    mount(findEl);
  }
}

//

export { mount };
