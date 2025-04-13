import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayGroundRoutes from "./router/PlayGroundRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlayGroundRoutes />
    </BrowserRouter>
  </StrictMode>
);
