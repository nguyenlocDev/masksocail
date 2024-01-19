import React from "react";
import { SearchIcon, OtherIcon } from "../ui/ui";
import FriendList from "../friends/FriendList";
import StoriesList from "../stories/StoriesList";
const RightBar: React.FC = () => {
  return (
    <div className="w-[25%] h-full px-5 flex flex-col gap-y-8 text-grayScale">
      <div className="w-full relative border border-grayScale-40 rounded-xl flex items-center px-3 ">
        <input
          type="text"
          className="w-full px-3 py-2 outline-none border-0 ml-3"
          placeholder="Search Friends!"
        />
        <div className="absolute top-1/2 left-3 -translate-y-1/2 fill-grayScale">
          <SearchIcon />
        </div>
      </div>
      <StoriesList />
      <div className="flex flex-col gap-y-3 w-full overflow-hidden">
        <div className="flex justify-between items-center font-semibold">
          <h2>Friends</h2>
          <div className="cursor-pointer">
            <OtherIcon />
          </div>
        </div>
        <FriendList />
      </div>
    </div>
  );
};

export default RightBar;
