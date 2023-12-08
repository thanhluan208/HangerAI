import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Login from "./screen/Login";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useAuthentication } from "./providers/AuthenticationProvider";
import VirtualTryOn from "./screen/VirtualTryOn";
import Home from "./screen/Home";
import ProductDescriptionGenerate from "./screen/ProductDescriptionGenerate";
import io from "socket.io-client";
import { useSave } from "./stores/useStores";
import { useEffect } from "react";
import cachedKeys from "./constants/cachedKeys";

const socket = io("http://localhost:3000");

const App = () => {
  //! State
  const { islogged } = useAuthentication();
  const save = useSave();
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
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product-recommendation",
          element: <ProductDescriptionGenerate />,
        },
        {
          path: "*",
          element: <VirtualTryOn />,
        },
        // {
        //   path: "*",
        //   loader: () => {
        //     const path = window.location.pathname
        //     if (path !== "virtual-try-on") {
        //       return redirect("/virtual-try-on")
        //     }

        //     return null
        //   },
        // },
      ],
      loader: () => {
        if (!islogged) return redirect("/login");

        return null;
      },
    },
  ]);

  //! Function
  useEffect(() => {
    save(cachedKeys.socket, socket);
  }, []);

  //! Render
  return <RouterProvider router={router} />;
};

export default App;
