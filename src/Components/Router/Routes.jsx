import { createBrowserRouter } from "react-router";
import MainLayout from './../Layouts/MainLayout';
import Home from './../Pages/Home/Home';
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/App/AppDetails";
import ErrorPage from './../Pages/Errors/ErrorPage';
import MyInstallations from "../Pages/MyInstallation/MyInstallations";



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
        loader:()=>fetch('/AppData.json'),
        Component:AllApps
      },
      {
        path:'/myApps',
        loader:()=>fetch('/AppData.json'),
        Component:MyInstallations
      },
      {
        path:'/appDetails/:id',
        loader:()=>fetch('/AppData.json'),
        Component:AppDetails
      }
    ]
  },
]);