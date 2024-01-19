import React, { useState } from "react";
import {
  CallIcon,
  VideoIcon,
  InfomationIcon,
  LinkIcon,
  SmileIcon,
  PictureIcon,
  SendIcon,
} from "../ui/ui";
import MessagesChat from "./MessagesChat";
import MessagesProfile from "./MessagesProfile";

const MessagesContent = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const handleMessagesProfile = () => {
    setShowProfile(true);
  };
  return (
    <div className="bg-white flex-1 rounded-2xl shadow-lg flex flex-col text-grayScale ">
      {showProfile && <MessagesProfile setShowProfile={setShowProfile} />}
      <div className="flex p-5 items-center gap-x-3 w-full justify-between border-b border-grayScale-20">
        <div className="flex gap-x-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            <div className=" absolute z-20 w-4 h-4 rounded-full bg-greenPrimary right-0 border-2 border-white  bottom-0"></div>
            <img
              className="w-full h-full object-cover rounded-full "
              src={require("../../asset/img/avatar.jpg")}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-medium">Ho Nguyen Loc</h2>
            <span>Active now</span>
          </div>
        </div>
        <div className="flex items-center gap-x-5 fill-grayScale">
          <div className="cursor-pointer">
            <CallIcon />
          </div>
          <div className="cursor-pointer">
            <VideoIcon />
          </div>
          <div className="cursor-pointer" onClick={handleMessagesProfile}>
            <InfomationIcon />
          </div>
        </div>
      </div>
      <MessagesChat />
      <div className="mt-auto border-t border-grayScale-20 flex gap-x-3 p-5">
        <div className=" bg-grayScale-5 border border-grayScale-20 rounded-md flex flex-1 justify-between px-5">
          <input
            type="text"
            className=" py-2 outline-none bg-transparent"
            placeholder="Type something here..."
          />
          <div className="flex fill-grayScale items-center gap-x-5">
            <div className="cursor-pointer">
              <LinkIcon />
            </div>
            <div className="cursor-pointer">
              <SmileIcon />
            </div>
            <div className="cursor-pointer">
              <PictureIcon />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center p-3  bg-bluePrimary/10 rounded-lg cursor-pointer">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
