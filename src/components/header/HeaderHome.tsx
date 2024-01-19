import React from "react";
import LogoSvg from "../../components/ui/LogoSvg";
import SearchIcon from "../ui/SearchIcon";
import { NavLink } from "react-router-dom";
const HeaderHome: React.FC = () => {
  return (
    <div className="h-20 w-full flex items-center px-8 text-grayScale">
      <NavLink to="/">
        <div className="flex items-center gap-x-3 text-xl font-semibold cursor-pointers text-grayScale ">
          <LogoSvg></LogoSvg>
          <h3>Mask Social</h3>
        </div>
      </NavLink>
      <div className="w-[40%] ml-20 relative border border-grayScale-40 rounded-xl flex items-center px-3 ">
        <input
          type="text"
          className="w-full px-3 py-2 outline-none border-0 ml-3"
          placeholder="Search Friends!"
        />
        <div className="absolute top-1/2 left-3 -translate-y-1/2 fill-grayScale">
          <SearchIcon />
        </div>
      </div>
      <div className="flex gap-x-5 ml-auto items-center font-medium text-xl">
        <h2>Hồ Nguyên Lộc</h2>
        <img
          className="w-11 h-11 object-cover rounded-md "
          src={require("../../asset/img/avatar.jpg")}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default HeaderHome;
