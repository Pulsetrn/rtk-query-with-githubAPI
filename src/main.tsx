import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";
import FavouritesPage from "./Pages/FavouritesPage.tsx";
import MainMenu from "./Pages/MainMenu.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/favourites",
        element: <FavouritesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </Provider>
);
