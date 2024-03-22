import { Suspense,lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import path from "path";
import AddProduct from "./pages/product/addProduct/index.tsx";


const routes:RouteObject[]=[
    {
        path:'/',
        element:<Dashboard/>,
       

    },
    {
        path:'/allproducts/addProduct',
            element :<AddProduct/>
        
    }
]
export default routes
