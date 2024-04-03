import { Suspense,lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import path from "path";
import AddProduct from "./pages/product/addProduct/index.tsx";
import Orders from "./pages/order/index";
import OverView from "./pages/Overview/index";
import Home from "./pages/home/index";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import AllProduct from "./pages/product/allProducts/AllProduct";


const routes:RouteObject[]=[

    {
        path:'/settings',
        element:<Dashboard/>,
       

    },
    {
        path:'/allproducts/addProduct',
            element :<AddProduct/>
        
    },
    {
        path:"/allproducts",
        element:<AllProduct/>
    },
    {
        path:"/customer/my-order",
        element: <Orders/>
    },
    {
        path:"/customer/dashboard",
        element: <OverView/>
    },
    {
        path:"/home",
        element: <Home/>
    },
    {
        path:"/signup",
        element: <Signup/>
    },
    {
        path:"/login",
        element: <Login/>
    }
   
]
export default routes
