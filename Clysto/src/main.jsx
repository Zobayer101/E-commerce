import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Style/main.css";
import { Provider } from "react-redux";
import stor from "../App/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={stor}>
      <App />
    </Provider>
  </React.StrictMode>
);
