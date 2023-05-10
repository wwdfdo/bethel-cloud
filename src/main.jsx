import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import BethelMainDashBoard from "./components/BethelMainDashBoard/BethelMainDashBoard";
import MyCloud from "./components/MyCloud/MyCloud";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<BethelMainDashBoard />} />
      <Route path="mycloud" element={<MyCloud />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
