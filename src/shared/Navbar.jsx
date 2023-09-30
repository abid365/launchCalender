import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="border border-[#a15999] flex items-center justify-between px-7 py-4">
        <div>
          <img
            src="/src/assets/20220705_223900_mi_7uhh4lp0zpcobci9rverwu1nuearz2ntr_b8bilkc41lqb.png"
            className="h-10"
            alt=""
          />
        </div>
        <div>
          <button className="border px-5 py-2 rounded-lg text-[#a15999] border-[#a15999]">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
