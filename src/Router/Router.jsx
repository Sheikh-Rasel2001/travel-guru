import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
import Booking from "../Pages/Booking";

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
        ]
    }
])

export default router;