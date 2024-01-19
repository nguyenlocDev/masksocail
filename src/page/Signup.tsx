import React from "react";

import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  FacebookIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
  MaleIcon,
  SmileIcon,
} from "../components/ui/ui";
const Signup: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white fill-grayScale">
      <Header />
      <div className="w-[580px] mx-auto flex flex-col items-center mt-8 ">
        <div className="w-full flex flex-col items-center gap-y-3 mb-8 text-grayScale">
          <h1 className="font-extrabold text-3xl">Getting Started</h1>
          <span className="font-medium">
            Create an account to continue and connect with the people.
          </span>
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
            <SmileIcon />
            <input
              className="w-full outline-none border-0  "
              type="text"
              name="name"
              placeholder="Your Name"
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
          <div className="flex w-full gap-5 items-center">
            <div className="flex w-[calc(50%-10px)] gap-x-3 px-5 py-4 border border-grayScale-20 text-grayScale rounded-lg items-center">
              <CalendarIcon />
              <input
                className="w-full outline-none border-0"
                type="text"
                placeholder="Date of birth"
                name="date-of-birth"
              />
            </div>
            <div className="flex w-[calc(50%-10px)] px-5 py-4 gap-x-3 border border-grayScale-20 text-grayScale rounded-lg items-center">
              <MaleIcon />
              <div className="flex gap-x-2 items-center">
                <input type="radio" checked name="sex" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-x-2 items-center">
                <input type="radio" name="sex" id="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <button className="p-3 w-full bg-bluePrimary rounded-lg text-white font-semibold mt-5 mb-5">
            Sign Up
          </button>
          <div className="w-full flex items-center justify-center gap-x-5 text-grayScale font-semibold">
            <span>Already have an account? </span>
            <Link className="text-bluePrimary " to="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
