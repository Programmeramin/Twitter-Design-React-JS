import { createBrowserRouter } from "react-router-dom";
import Auth from "../Pages/Auth/Auth";
import Home from "../Pages/Home/Home";



// create a router
const router = createBrowserRouter([

    {
        path : "/",
        element : <Home/>
    },

    {
        path : "/auth",
        element : <Auth/>
    }
]);


//default export
export default router;