import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen /*, { loader as rootLoader }*/ from "./routes/home";

//import App from './App'
import store from "./store";
import "./index.css";
import { Provider } from "react-redux";
import ErrorPage from "./components/error-page";
import Game from "./routes/game";
import Components from "./routes/components";
//import Game from './routes/game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorPage />,
    //loader: rootLoader,
    //children: [
    //  {
    //    path: "game/:gameId",
    //    element: <Game />,
    //  },
    //],
  },
  {
    path: "game/:gameId",
    element: <Game />,
  },
  {
    path: "/components",
    element: <Components />,
  },
]);
//<App />
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
