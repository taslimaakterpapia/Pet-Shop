import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Shared/Contact/Contact";
import Cart from "../pages/Shared/Cart/Cart";
import Dog from "../pages/Home/Category/Dog";
import Cat from "../pages/Home/Category/Cat";
import Fish from "../pages/Home/Category/Fish";
import Bird from "../pages/Home/Category/Bird";
import CatFood from "../pages/Home/Category/CatFood";
import Medicine from "../pages/Home/Category/Medicine";
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
        },
        {
          path:'/cat',
          element:<Cat></Cat>
      },
      {
        path:'/dog',
        element:<Dog></Dog>
    },
    {
      path:'/fish',
      element:<Fish></Fish>
  },
  {
    path:'/bird',
    element:<Bird></Bird>
},
{
  path:'/catfood',
  element:<CatFood></CatFood>
},
{
  path:'/medicine',
  element:<Medicine></Medicine>
}


      ]},
])
