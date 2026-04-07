import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
import Booking from "../Pages/Booking";
import Hotels from "../Pages/Hotels";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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
        
    },


    // hotel list 
    {
        path: '/hotels',
        element: <Hotels></Hotels>,
        loader: () => fetch('/hotels.json').then(res => res.json())
    }
])

export default router;