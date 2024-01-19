import React from "react";
import SearchIcon from "../components/ui/SearchIcon";

const BlockingSetting: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="p-8 font-bold text-lg">
        <h2>Block users</h2>
      </div>
      <div className="px-8">
        <span>
          Once you block someone, that person can no longer see things you post
          on your timeline, tag you, invite you to events or groups, start a
          conversation with you, or add you as a friend. Note: Does not include
          apps, games or groups you both participate in
        </span>
      </div>
      <div className="px-8 mt-8 flex flex-col gap-y-3 w-1/2">
        <div className="w-full border border-grayScale-20 rounded-lg items-center flex justify-between px-3">
          <input
            className="px-3 py-2 w-full outline-none"
            type="text"
            placeholder="Enter name?"
          />
          <SearchIcon />
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="font-medium">Block users list</span>
          <ul className="flex flex-col gap-y-3">
            <li className="flex w-full gap-x-3 cursor-pointer items-center">
              <div>
                <img
                  className="w-10 h-10 object-cover rounded-full "
                  src={require("../asset/img/avatar.jpg")}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-medium">Taylor David</h2>
                <span>Blocked •26/08/2021</span>
              </div>
              <button className="ml-auto px-5 py-2 text-white bg-bluePrimary rounded-lg">
                Unblock
              </button>
            </li>
            <li className="flex w-full gap-x-3 cursor-pointer items-center">
              <div>
                <img
                  className="w-10 h-10 object-cover rounded-full "
                  src={require("../asset/img/avatar.jpg")}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-medium">Taylor David</h2>
                <span>Blocked •26/08/2021</span>
              </div>
              <button className="ml-auto px-5 py-2 text-white bg-bluePrimary rounded-lg">
                Unblock
              </button>
            </li>
            <li className="flex w-full gap-x-3 cursor-pointer items-center">
              <div>
                <img
                  className="w-10 h-10 object-cover rounded-full "
                  src={require("../asset/img/avatar.jpg")}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-medium">Taylor David</h2>
                <span>Blocked •26/08/2021</span>
              </div>
              <button className="ml-auto px-5 py-2 text-white bg-bluePrimary rounded-lg">
                Unblock
              </button>
            </li>
            <li className="flex w-full gap-x-3 cursor-pointer items-center">
              <div>
                <img
                  className="w-10 h-10 object-cover rounded-full "
                  src={require("../asset/img/avatar.jpg")}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-medium">Taylor David</h2>
                <span>Blocked •26/08/2021</span>
              </div>
              <button className="ml-auto px-5 py-2 text-white bg-bluePrimary rounded-lg">
                Unblock
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockingSetting;
