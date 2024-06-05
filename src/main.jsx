import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ReduxProvider from "./redux/ReduxProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
