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
import Callback from "./screen/Callback";
import FacebookPost from "./screen/FacebookPost";
import UserProfile from "./screen/UserProfile";

const socket = io("https://7440-123-25-21-211.ngrok-free.app", {
  retries: 3,
  reconnectionAttempts: 3,
  reconnectionDelay: 50000,
  // rememberUpgrade: true,
  // transports: ["websocket"],
  extraHeaders: {
    "ngrok-skip-browser-warning": "true",
  },
});

socket.on("connect", (data) => {
  console.log("data", data);
});
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

// const socket = io("http://localhost:3000", {
//   // extraHeaders: {
//   //   "ngrok-skip-browser-warning": true,
//   // },
// }).on("connection", (data) => {
//   console.log("data", data);
// });

const App = () => {
  //! State
  const { islogged } = useAuthentication();
  const save = useSave();
  const router = createBrowserRouter([
    {
      path: "callback",
      element: <Callback />,
    },
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
          path: "user-profile",
          element: <UserProfile />,
        },
        {
          path: "facebook-post",
          element: <FacebookPost />,
        },
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
  // useEffect(() => {
  //   save(cachedKeys.socket, socket);
  //   socket.on("connect", (data) => {
  //     console.log("connect", data);
  //   });

  //
  // }, []);

  //! Render
  return <RouterProvider router={router} />;
};

export default App;
