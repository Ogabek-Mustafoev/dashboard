import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

Number.prototype.toCountFormat = function () {
  const formattedNumber = this.toFixed(2).replace(
    /\d(?=(\d{3})+\.)|(\.00$)/g,
    "$&,"
  );
  return formattedNumber.split(".")[0];
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
