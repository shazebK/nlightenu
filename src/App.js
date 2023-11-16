import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import RootLayout from "./pages/RootLayout";
import Articles from "./pages/Articles";
import Courses from "./pages/Courses";
import About from "./pages/About";
import ArticlePage,{loader as ArticlePageLoader} from "./pages/ArticlePage";
import ArticleUpload from "./pages/ArticleUpload";

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          index:true,
          path : "",
          element : <Home/>
        },
        {
          path : "auth",
          element : <Auth/>,
        },
        {
          path : "articles/",
          children:[
            {
              index:true,
              path:"",
              element:<Articles/>
            },
            {
              path:"upload",
              element:<ArticleUpload/>
            },
            {
              path:":articleId",
              element:<ArticlePage/>,
              loader:ArticlePageLoader,
            }
          ]
        },
        {
          path : "courses",
          element : <Courses/>
        },
        {
          path : "about",
          element : <About/>
        },
      ],
    }
  ]);

  return(
    <RouterProvider router={router}/>
  );
}

export default App;