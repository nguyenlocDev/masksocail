import React from "react";
import { listPage } from "../../scripts/listPage";
import { NavLink } from "react-router-dom";

const SiteBar: React.FC = () => {
  return (
    <div className="w-[17%] h-full  px-5 py-3 flex flex-col gap-3 text-grayScale">
      {listPage.map((items) => {
        return (
          <NavLink key={items.path} to={items.path}>
            {({ isActive }) => (
              <li
                className={`list-none flex items-center gap-3  px-5 py-3 rounded-xl font-semibold hover:bg-grayScale hover:text-white cursor-pointer transition-all ease-linear fill-grayScale hover:fill-white ${
                  isActive ? "bg-grayScale text-white fill-white" : ""
                }`}
              >
                <items.icon />
                <span>{items.name}</span>
              </li>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SiteBar;
