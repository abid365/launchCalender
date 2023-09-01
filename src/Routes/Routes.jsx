import {
    createBrowserRouter,
} from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<div>Hello</div>
    },
    {
        path:"/login",
        element:<LoginPage></LoginPage>
    }
]);