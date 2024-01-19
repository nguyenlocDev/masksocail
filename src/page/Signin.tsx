import React from "react";
import Header from "../components/header/Header";
import {
  FacebookIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
} from "../components/ui/ui";

import { Link } from "react-router-dom";
const Signin: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white fill-grayScale ">
      <Header />
      <div className="w-[580px] mx-auto flex flex-col items-center mt-8 ">
        <div className="w-full flex flex-col items-center gap-y-3 mb-8 text-grayScale">
          <h1 className="font-extrabold text-3xl">Sign In</h1>
          <span className="font-medium">Welcome back, you’ve been missed!</span>
        </div>
        <div className="w-full p-10 shadow-md rounded-2xl">
          <div className="flex items-center justify-between gap-x-5">
            <div className="rounded-lg bg-grayScale-5 text-grayScale font-semibold shadow-sm w-[calc(50%-10px)] py-4 flex gap-3 items-center justify-center ">
              <GoogleIcon />
              <span>Log in with Google</span>
            </div>
            <div className="rounded-lg bg-grayScale-5 text-grayScale font-semibold shadow-sm w-[calc(50%-10px)] py-4 flex gap-3 items-center justify-center ">
              <FacebookIcon />
              <span>Log in with Facebook</span>
            </div>
          </div>
          <div className="relative w-full flex items-center justify-center p-8">
            <h2 className="line before:bg-grayScale-20 before:top-1/2 before:left-0 after:bg-grayScale-20 after:top-1/2 after:right-0 font-semibold text-grayScale">
              OR
            </h2>
          </div>
          <div className="flex items-center px-5 py-4 border border-grayScale-20 rounded-lg gap-x-3 mb-5 text-grayScale">
            <MailIcon />
            <input
              className="w-full outline-none border-0  "
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>

          <div className="flex items-center px-5 py-4 border border-grayScale-20 rounded-lg gap-x-3 mb-5 text-grayScale">
            <LockIcon />
            <input
              className="w-full outline-none border-0  "
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </div>
          <div className="flex justify-between text-grayScale font-semibold items-center">
            <div className="flex gap-x-3 ml-5 items-center">
              <input
                className="w-4 h-4 border-spacing-1 outline-none border-grayScale "
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/">Forgot Password?</a>
          </div>
          <button className="p-3 w-full bg-bluePrimary rounded-lg text-white font-semibold mt-5 mb-5">
            Sign In
          </button>
          <div className="w-full flex items-center justify-center gap-x-5 text-grayScale font-semibold">
            <span>You haven't any account? </span>
            <Link className="text-bluePrimary " to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
