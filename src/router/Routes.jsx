import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import ErrorPage from "../pages/ErrorPage";
import AddServices from "../pages/AddServices";
import MyServices from "../pages/MyServices";
import UpdateService from "../pages/UpdateService";
import MyOrders from "../pages/MyOrders";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>
            },
            {
                path: '/forget-pass/:email',
                element: <ForgetPass></ForgetPass>
            },
            {
                path: '/add-services',
                element: <PrivateRoute>
                    <AddServices></AddServices>
                </PrivateRoute>
            },
            {
                path: '/my-services',
                element: <PrivateRoute>
                    <MyServices></MyServices>
                </PrivateRoute>
            },
            {
                path: '/my-orders',
                element: <PrivateRoute>
                    <MyOrders></MyOrders>
                </PrivateRoute>
            },
            {
                path: '/update-services/:id',
                element: <PrivateRoute>
                    <UpdateService></UpdateService>
                </PrivateRoute>
            }
        ]
    },
]);
export default router;