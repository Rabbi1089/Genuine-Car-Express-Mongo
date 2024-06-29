import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Checkout from "../Checkout";
import Bookings from "../../booking/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element : <Main />,


        children : [
            {
                path : '/',
                element : <Home />
            },

            {
                path : '/login',
                element : <Login />
            }
            ,
            {
                path: '/signUp',
                element : <SignUp />
            }
            ,
            {
                path : 'Checkout/:id',
                element :
                <PrivateRoutes>
                    <Checkout />
                </PrivateRoutes> ,
                loader : ({params}) => fetch (`http://localhost:5000/Services/${params.id}`)
            },

            {
                path : '/Bookings',
                element : <PrivateRoutes>
                <Bookings />
                </PrivateRoutes>
              
            }
        ]

    }
])
export default router;