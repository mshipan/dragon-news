import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Login from "./Pages/Login";
import Category from "./Pages/Category";
import NewsLayout from "./Layout/NewsLayout";
import News from "./Pages/News";
import AuthProvider from "./Providers/AuthProvider";
import Register from "./Pages/Register";
import Privateroute from "./Routes/Privateroute";
import Terms from "./Pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Category></Category>,
            loader: () => fetch("http://localhost:6020/news/"),
          },
          {
            path: "/category/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(`http://localhost:6020/categories/${params.id}`),
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <Privateroute>
            <News></News>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:6020/news/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
