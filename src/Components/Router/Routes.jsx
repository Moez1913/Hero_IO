import { createBrowserRouter } from "react-router";
import MainLayout from './../Layouts/MainLayout';
import Home from './../Pages/Home/Home';
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/App/AppDetails";
import ErrorPage from './../Pages/Errors/ErrorPage';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        Component:Home,
        
      },
      {
        path:'/All',
        Component:AllApps
      },
      {
        path:'/appDetails/:id',
        loader:()=>fetch('/AppData.json'),
        Component:AppDetails
      }
    ]
  },
]);