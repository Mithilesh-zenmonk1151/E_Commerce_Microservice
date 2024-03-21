import { Suspense,lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import path from "path";


const routes:RouteObject[]=[
    {
        path:'/',
        element:<Dashboard/>,
       

    }
]
export default routes
