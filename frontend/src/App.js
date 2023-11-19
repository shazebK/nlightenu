import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import Auth , {action as AuthAction} from "./pages/Auth";
import RootLayout from "./pages/RootLayout";
import Articles,{loader as ArticlesLoader} from "./pages/Articles";
import Courses from "./pages/Courses";
import About from "./pages/About";
import ArticlePage,{loader as ArticlePageLoader} from "./pages/ArticlePage";
import ArticleUpload,{action as ArticleUploadAction} from "./pages/ArticleUpload";

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          path : "",
          element : <Home/>,
        },
        {
          path : "auth",
          element : <Auth/>,
          action:AuthAction,
        },
        {
          path : "articles/",
          children:[
            {
              index:true,
              path:"",
              element:<Articles/>,
              loader:ArticlesLoader,
            },
            {
              path:"upload",
              element:<ArticleUpload/>,
              action:ArticleUploadAction,
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