import { createBrowserRouter } from "react-router";
import MainLayout from './../Layouts/MainLayout';
import Home from './../Pages/Home/Home';
import AllApps from "../Pages/AllApps/AllApps";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement: <div>404 Not Found</div>,
    children:[
      {
        index:true,
        path:'/',
        Component:Home,
        
      },
      {
        path:'/All',
        Component:AllApps
      }
    ]
  },
]);