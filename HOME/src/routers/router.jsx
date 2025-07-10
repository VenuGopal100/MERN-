import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";

import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from './../dashboard/ManageBooks';
import EditBooks from "../dashboard/EditBooks";
import Cart from "../cart/Cart";
import WishList from "../wishlist/WishList";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from './../dashboard/DashboardLayout';



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/wishlist",
          element:<WishList/>
        },
        {
          path:"/admin/dashboard",
          element:<DashboardLayout></DashboardLayout>,
          children:[
            {
              path:"/admin/dashboard",
              element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
              path:"/admin/dashboard/upload",
              element:<UploadBook></UploadBook>
            },
            {
              path:"/admin/dashboard/manage",
              element:<ManageBooks></ManageBooks>
            },
            {
              path:"/admin/dashboard/edit-books/:id",
              element:<EditBooks></EditBooks>,
              loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
            }
          ]
        }
      ]
    },
    {
      path:"/sign-up",
      element:<SignUp></SignUp>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
]);

export default router;