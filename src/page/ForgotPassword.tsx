import React from "react";
import Header from "../components/header/Header";
import MailIcon from "../components/ui/MailIcon";
import IconAngleDown from "../components/ui/IconAngleDown";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  return (
    <div className="bg-white w-fulll h-full">
      <Header />
      {true ? (
        <>
          <div className="w-[580px] mx-auto flex flex-col items-center mt-8 ">
            <div className="w-full flex flex-col items-center gap-y-3 mb-8 text-grayScale">
              <h1 className="font-extrabold text-3xl">Forgot password?</h1>
              <span className="font-medium">
                Enter your details to receive a rest link.
              </span>
            </div>
            <div className="w-full p-10 flex flex-col text-grayScale shadow-lg rounded-lg">
              <div className="flex items-center px-5 py-4 border border-grayScale-20 rounded-lg gap-x-3 mb-5 text-grayScale">
                <MailIcon />
                <input
                  className="w-full outline-none border-0  "
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <button className="p-3 w-full bg-bluePrimary rounded-lg text-white font-semibold mb-5">
                Send
              </button>
              <div className="flex  w-full items-center justify-center gap-x-3 text-bluePrimary">
                <div className="rotate-90 fill-bluePrimary">
                  <IconAngleDown />
                </div>
                <Link to="/signin">Back to Sign In</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-[580px] mx-auto flex flex-col items-center justify-center mt-8 p-10 shadow-2xl rounded-lg">
          <div className="w-full flex flex-col items-center gap-y-3 text-grayScale">
            <h1 className="font-extrabold text-3xl">Check your email</h1>
            <span className="font-medium">
              We've sent a link to your email address:
              <a href="/" className="text-bluePrimary">
                {" "}
                admin@gmail.com
              </a>
            </span>
          </div>
          <button className="p-3 w-full bg-bluePrimary rounded-lg text-white font-semibold mt-5 mb-5">
            Skip now
          </button>
          <div className="w-full flex items-center justify-center gap-x-5 text-grayScale font-semibold">
            <span>Didn't receive an email? </span>
            <Link className="text-bluePrimary " to="/">
              Resend
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
