import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="bg-[#fef9fa]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
