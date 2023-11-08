import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/auth/:authtype",
          element : <Auth/>,
        }
      ],
    }
  ]);

  return(
    <RouterProvider router={router}/>
  );
}

export default App;