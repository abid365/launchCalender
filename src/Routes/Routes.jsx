import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Calendar from "../Pages/Calendar/Calendar";
import App from "../App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/forgetPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/calendar",
        element: <Calendar>s</Calendar>,
      },
    ],
  },
]);
