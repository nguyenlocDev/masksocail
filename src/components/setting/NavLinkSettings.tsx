import React from "react";
import { listNavSetting } from "../../scripts/listSetting";
import { NavLink } from "react-router-dom";
import IconAngleDown from "../ui/IconAngleDown";

const NavLinkSettings: React.FC = () => {
  const handleSettingLink = () => {};
  return (
    <div className="w-[25%] border-r border-grayScale-20 px-5 py-8 ">
      <ul className="w-full list-none gap-y-5">
        {listNavSetting.map((items) => (
          <NavLink key={items.path} to={items.path}>
            {({ isActive }) => (
              <li
                className={`flex gap-x-5 items-center border-b fill-grayScale   border-grayScale-20 py-3 group hover:font-bold cursor-pointer ${
                  isActive ? "font-bold" : ""
                }`}
                key={items.path}
                onClick={handleSettingLink}
              >
                <div>
                  <items.icon />
                </div>
                <span>{items.name}</span>
                <div
                  className={`ml-auto -rotate-90 group-hover:visible group-hover:opacity-100 ${
                    isActive ? "opacity-100 visible" : " opacity-0 invisible"
                  }`}
                >
                  <IconAngleDown />
                </div>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavLinkSettings;
