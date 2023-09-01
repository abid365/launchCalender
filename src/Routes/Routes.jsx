import {
    createBrowserRouter,
} from "react-router-dom";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<div>Hello</div>,
        children:[
            {
                path:"/login",
                element:<div>Login page</div>
            }
        ]
    }
]);