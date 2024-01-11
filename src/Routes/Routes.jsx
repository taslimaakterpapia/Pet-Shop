import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Shared/Contact/Contact";
import Cart from "../pages/Shared/Cart/Cart";

import BlogPage from "../pages/Home/Blog/BlogPage";
import CatFood from "../pages/Home/CategoryItems/CatFood";
import BirdFood from "../pages/Home/CategoryItems/birdFood";
import DogFood from "../pages/Home/CategoryItems/DogFood";

import RabbitFood from "../pages/Home/CategoryItems/RabbitFood";
import FishFood from "../pages/Home/CategoryItems/Fishfood";

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
            path:'/blog',
            element:<BlogPage></BlogPage>
        },





        {
            path:'/cat-food',
            element:<CatFood></CatFood>
        },
        {
            path:'/dog-food',
            element:<DogFood></DogFood>
        },
        {
            path:'/bird-food',
            element:<BirdFood></BirdFood>
        },
        {
            path:'/fish-food',
            element:<FishFood></FishFood>
        },
        {
            path:'/rabbit-food',
            element:<RabbitFood></RabbitFood>
        },
     
    


      ]},
])
