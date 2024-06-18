import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.tsx";
import "@/ui/styles/main.scss";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
