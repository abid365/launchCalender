import React from "react";
import './LoginPage.css'
import { FaBeer, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginPage = () => {

  return (
    <div >
      <section className="text-[#FEF9FA] body-font relative text-base">
        <div className="container px-5 py-10  mx-auto border-2xl ">
          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <div className=" border-[1px] border-[#a15999] px-10 py-10 rounded-md">
              <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4  text-[#a15999]">
                Sign In
              </h1>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#a15999]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      required
                      placeholder="Enter your Email"
                      name="Phone"
                      className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#a15999]"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your password"
                      id="Purpose of visit"
                      name="Purpose of visit"
                      className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                    />
                    <div className="lg:flex justify-between items-center my-2 mb-5">
                      <div className="flex items-center lg:my-0 my-3 lg:justify-between gap-2">
                        <input className="checkbox checkbox-secondary" type="checkbox" name="" id="" />
                        <h2 className="text-[#a15999]">Stay Sign in</h2>
                      </div>
                      <div>
                        <h2 className="text-[#a15999]"><Link to="/forgetPassword">Forget Password?</Link></h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className=" w-full text-center text-[#fff] bg-[#a15999] border-0 py-2 px-8 focus:outline-none hover:bg-[#a8599f] rounded text-lg">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center text-[#a15999] mt-5 gap-5">
                <div className="flex justify-center items-center gap-2 text-base"><FaFacebook></FaFacebook> <span>Facebook</span></div>
                <div className="text-base flex justify-center items-center gap-2"><FaGoogle></FaGoogle> <span>Google</span></div>

              </div>
              <div className=" lg:flex justify-between items-center text-[#a15999] mt-10">
                <p className="lg:text-left text-center lg:my-0 my-5">Privacy Policy</p>
                <div className="flex justify-between items-center lg:gap-3 gap-1">
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