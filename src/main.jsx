import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/home";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import axios from "axios";
import store from "./app/store"
import { Provider } from "react-redux";
import Barber from "./pages/staff/barber/barber";
import Customer from "./pages/customer/customer";
import Cashier from "./pages/staff/cashier/cashier";
import AdminDashboard from "./pages/staff/admin/adminDashboard";
import ManageStaff from "./pages/staff/admin/manageStaff";


axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/staff/manager",
    element: <AdminDashboard/>
  }
  ,
  {
    path: "/staff/admin",
    element: <AdminDashboard/>
  }
  ,
  {
    path: "/staff/admin/manage_staff",
    element: <ManageStaff/>
  }
  ,
  {
    path: "/staff/cashier",
    element: <Cashier/>
  }
  ,
  {
    path: "/staff/barber",
    element: <Barber/>
  }
  ,
  {
    path: "/profile",
    element: <Customer/>
  }
])
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider><Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);