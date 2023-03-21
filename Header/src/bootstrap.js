import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

// delelopment or production in isolation
if (process.env.NODE_ENV === "development") {
  const findEl = document.querySelector("#header-app");
  if (findEl) {
    mount(findEl);
  }
}

export { mount };
