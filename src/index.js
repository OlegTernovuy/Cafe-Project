import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./components/providers/ModalProvider";
import { ModalNavigation } from "./components/providers/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ModalProvider>
    <ModalNavigation>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ModalNavigation>
  </ModalProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();