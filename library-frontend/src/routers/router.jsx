
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Home from "../home/Home";
import Staffs from "../staffs/Staffs";
import Branches from "../components/branches/Branches";
import Contact from "../components/Contact";
import Help from "../components/Help";
import Services from "../components/Services";
import SingleBook from "../components/SingleBook";
import AllBooks from "../components/AllBooks";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/staffs",
          element: <Staffs/>
        },
        {
          path: "/allbooks",
          element: <AllBooks/>
        },
        {
          path: "/Branches",
          element: <Branches/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/help",
          element: <Help/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },

      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    }, {
      path: "/sign-up",
      element: <SignUp/> 
    }, {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/logout",
      element: <Logout/>
    }
  ]);

export default router;