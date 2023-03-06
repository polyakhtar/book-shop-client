import { createBrowserRouter } from "react-router-dom";
import Bookdetail from "../components/Home/Books/Bookdetail/Bookdetail";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layout/Main/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'bookdetail/:id',
                element:<PrivateRoute><Bookdetail></Bookdetail></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    
]);
export default router;