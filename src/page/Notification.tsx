import React from "react";
import RightBar from "../components/navigationBar/RightBar";
import SettingIcon from "../components/ui/SettingIcon";
import NotificationItems from "../components/notification/NotificationItems";

const Notification: React.FC = () => {
  return (
    <>
      <div className="  bg-backgroundPrimary flex-1 flex  p-8 pb-0 gap-x-8 rounded-xl rounded-b-none text-grayScale fill-grayScale">
        <div className="w-full flex flex-col bg-white rounded-t-2xl shadow-lg ">
          <div className="p-5 flex items-center justify-between border-b border-grayScale-20 ">
            <h2 className="font-semibold">Notification</h2>
            <div className="cursor-pointer">
              <SettingIcon />
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto hiddenScroll1 hiddenScroll2">
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
            <NotificationItems />
          </div>
        </div>
      </div>
      <RightBar />
    </>
  );
};

export default Notification;
