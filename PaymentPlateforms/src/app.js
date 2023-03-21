import React from "react";
import AppThemeProvider from "./theme";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <Main />
      </AppThemeProvider>
    </BrowserRouter>
  );
};

export default App;
