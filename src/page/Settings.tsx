import React from "react";
import NavLinkSettings from "../components/setting/NavLinkSettings";
import ContentSettings from "../components/setting/ContentSettings";
import { Outlet } from "react-router-dom";

const Settings: React.FC = () => {
  return (
    <div className="bg-backgroundPrimary w-full h-full flex-1 flex p-8 pb-0 gap-x-8 rounded-xl rounded-b-none overflow-hidden text-grayScale fill-grayScale">
      <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-sm flex  ">
        <NavLinkSettings />
        <ContentSettings>
          <Outlet />
        </ContentSettings>
      </div>
    </div>
  );
};

export default Settings;
