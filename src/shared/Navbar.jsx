import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="border border-red-400 flex items-center justify-between px-7 py-4">
        <div>Nusrat Geek</div>
        <div>
          <button className="border px-5 py-2 rounded-lg text-red-400 border-red-400">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
