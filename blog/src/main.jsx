import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import "./style.scss";
import App from "./App";



// const router = createBrowserRouter( routes );

const router = createBrowserRouter ([
  {
    path:"/",
    element:<App/>,
    children:routes
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
