import React from "react";
import { notificationContent } from "../../scripts/notificationContent";

const NotificationItems: React.FC = () => {
  return (
    <div className="flex px-5 py-2 gap-x-5 items-center border-b border-grayScale-20 cursor-pointer ">
      <div>{<notificationContent.share.element />}</div>
      <div className="flex items-center gap-x-3 w-full">
        <div className="h-10 w-10">
          <img
            className="w-full h-full object-cover rounded-full"
            src={require("../../asset/img/avatar.jpg")}
            alt=""
          />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <h2 className="font-medium whitespace-nowrap overflow-ellipsis">
            {`Ho Nguyen Loc ${notificationContent.share.title}`}
          </h2>
          <span className="text-grayScale-60 text-sm ">4 minutes ago</span>
        </div>
        {false ? (
          <FollowNoti />
        ) : (
          <div className="ml-auto w-4 h-4 rounded-full bg-greenPrimary  border-2 border-white "></div>
        )}
      </div>
    </div>
  );
};

export default NotificationItems;

const FollowNoti: React.FC = () => {
  return (
    <>
      <button
        className={`px-5 py-3  rounded-xl font-medium ${
          true
            ? "border border-grayScale-20 text-grayScale-60"
            : "text-white bg-bluePrimary"
        }`}
      >
        Follow Back
      </button>
    </>
  );
};
