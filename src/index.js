import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./Components/AboutUs.jsx";
import ContactUs from "./Components/ContactUs";
import Career from "./Components/Career";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/career",
    element: <Career />,
  },
]);
root.render(
  <ChakraProvider>
    <RouterProvider router={appRouter}></RouterProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
