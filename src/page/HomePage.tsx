import React from "react";
import SiteBar from "../components/navigationBar/SiteBar";
import HeaderHome from "../components/header/HeaderHome";
// import ContentHome from "../components/content/ContentHome";
import { Outlet } from "react-router-dom";
const HomePage: React.FC = () => {
  return (
    <div className="flex max-w-[1600px] mx-auto h-full flex-col bg-white ">
      <HeaderHome />
      <div className="flex w-full h-screen overflow-hidden">
        <SiteBar />
        <div className="flex flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
