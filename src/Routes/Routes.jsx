import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Calendar from "../Pages/Calendar/Calendar";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
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
]);
