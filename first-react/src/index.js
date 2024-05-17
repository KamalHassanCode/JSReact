import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./router.css";
import ErrorPage from "./error-page.js";
import Contact from "./routes/contacts.jsx";
import Root, { loader as rootLoader} from "./routes/root";
import FunctionalComponent from "./newComponent.js";
import UbisoftWebsite from "./Ubisoftweb.js";
import Operator from "./Operator.js";
const router = createBrowserRouter([
  {
    path: "/",
   element: <Root />,
   errorElement: <ErrorPage /> ,
   loader: rootLoader, 
   children: [
    {
        path: "/contact/:contactId",
        element: <Contact />

    },
    {
      path: "/functionalComponent",
      element: <FunctionalComponent /> 
    }
] 
  },
  {
    path: "/functionalComponent",
    element: <FunctionalComponent /> 
  },
  {
    path: "/Ubisoftweb",
    element: <UbisoftWebsite /> 
  },
  {
    path: "/operator",
    element: <Operator /> 
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


