import React from "react";
import LogoSvg from "../../components/ui/LogoSvg";
import IconAngleDown from "../../components/ui/IconAngleDown";
import { NavLink } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between px-8">
      <NavLink to="/">
        <div className="flex items-center gap-x-3 text-xl font-semibold cursor-pointers text-grayScale">
          <LogoSvg></LogoSvg>
          <h3>Mask Social</h3>
        </div>
      </NavLink>
      <div className="flex items-center gap-x-5 text-sm font-semibold cursor-pointers text-grayScale rounded-md bg-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.05)] px-5 py-3 cursor-pointer">
        <span>English</span>
        <IconAngleDown></IconAngleDown>
      </div>
    </div>
  );
};

export default Header;
