import React from "react";
import './LoginPage.css'
import { FaBeer, FaFacebook, FaGoogle } from "react-icons/fa";
const LoginPage = () => {

  return (
    <div >
      <section className="text-[#FEF9FA] body-font relative">
        <div className="container px-5 py-10  mx-auto border-2xl ">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className=" border-[1px] border-[#FF6081] px-10 py-10 rounded-md">
              <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4  text-[#FF6081]">
                Sign In
              </h1>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#FF6081]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      required
                      placeholder="Enter your Email"
                      name="Phone"
                      className="w-full bg-white rounded border border-[#FF6081] focus:border-[#FF6081]  outline-none text-[#FF6081] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#FF6081]"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#FF6081]"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your password"
                      id="Purpose of visit"
                      name="Purpose of visit"
                      className="w-full bg-white rounded border border-[#FF6081] focus:border-[#FF6081]  outline-none text-[#FF6081] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#FF6081]"
                    />
                    <div className="flex justify-between items-center my-2 mb-5">
                      <div className="flex items-center justify-between gap-2">
                        <input className="checkbox checkbox-secondary" type="checkbox" name="" id="" />
                        <h2 className="text-[#FF6081]">Stay Sign in</h2>
                      </div>
                      <div>
                        <h2 className="text-[#FF6081]">Forget Password?</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className=" w-full text-center text-[#fff] bg-[#FF6081] border-0 py-2 px-8 focus:outline-none hover:bg-[#e43c5e] rounded text-lg">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center text-[#FF6081] mt-5 gap-5">
                <div className="flex justify-center items-center gap-2 text-xl"><FaFacebook></FaFacebook> <span>Facebook</span></div>
                <div className="text-xl flex justify-center items-center gap-2"><FaGoogle></FaGoogle> <span>Google</span></div>

              </div>
              <div className="flex justify-between items-center text-[#FF0681] mt-10">
                <p>Privacy Policy</p>
                <div className="flex justify-between items-center gap-3">
                  <div>
                    @ 2023
                  </div>
                  <p>All rights reserved.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;