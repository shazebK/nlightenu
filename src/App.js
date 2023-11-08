import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {path : "/", element : <Home/>},
    {path : "/auth", element : <Auth/>}
  ]);

  return(
    <RouterProvider router={router}/>
  );
}

export default App;