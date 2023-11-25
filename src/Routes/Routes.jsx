import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Shared/Contact/Contact";
import Cart from "../pages/Shared/Cart/Cart";
     export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/cart',
            element:<Cart></Cart>
        }
      ]
    },
])
