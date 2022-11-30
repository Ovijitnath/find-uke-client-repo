import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../Dashboard/AllBuyers/AllBuyers";
import AllOrders from "../Dashboard/AllOrders/AllOrders";
import AddProduct from "../Dashboard/Dashboard/AddProduct/AddProduct";
// import Dashboard from "../Dashboard/Dashboard/Dashboard";
import MyOrders from "../Dashboard/MyOrders/MyOrders";
import Payment from "../Dashboard/Payment/Payment";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CatagoriesDetail from "../Pages/CatagoriesDetail/CatagoriesDetail";
// import Categories from "../Pages/Categories/Categories";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoutes";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {

                path: '/catagory/:id',
                element: <PrivateRoute><CatagoriesDetail></CatagoriesDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allorder',
                element: <PrivateRoute><AllOrders></AllOrders></PrivateRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {

                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;