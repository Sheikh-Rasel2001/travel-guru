import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
import Booking from "../Pages/Booking";
import Hotels from "../Pages/Hotels";
import AuthLayout from "../Authentication/AuthLayout";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../Authentication/PrivateRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                path: '/',
                element: <App></App>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            }
        ],
    },
    // authentication 
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/auth/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },


    // hotel list 
    {
        path: '/hotels',
        element: (
            <PrivateRoute>
                <Hotels></Hotels>
            </PrivateRoute>
        ),
        loader: () => fetch('/hotels.json').then(res => res.json())
    }
])

export default router;