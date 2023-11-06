import React from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useNavigate,
} from "react-router-dom";
import DefaultLayout, { nav } from "./components/DefaultLayout";
import Login from "./screen/Login";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useAuthentication } from "./providers/AuthenticationProvider";

const pathList = nav.map((item) => item.path);

const App = () => {
  //! State
  const { islogged } = useAuthentication();
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      loader: () => {
        if (islogged) return redirect("/");
        return null;
      },
    },
    {
      path: "*",
      Component: DefaultLayout,
      loader: () => {
        if (!islogged) return redirect("/login");
        const path = window.location.pathname;
       
        return null;
      },
    },
  ]);

  //! Function

  //! Render
  return <RouterProvider router={router} />;
};

export default App;
