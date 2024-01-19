import React from "react";
import { SearchIcon } from "../ui/ui";
import MessagesItems from "./MessagesItems";

const MessagesList: React.FC = () => {
  return (
    <div className="w-1/3 bg-white py-5 pb-0 rounded-t-2xl shadow-lg text-grayScale overflow-hidden flex flex-col">
      <div className="px-5 flex w-full justify-between gap-x-3 items-center mb-5">
        <div className="w-full relative border border-grayScale-40 rounded-xl flex items-center px-3 fill-grayScale">
          <input
            type="text"
            className="w-full px-3 py-2 outline-none border-0 ml-3"
            placeholder="Search Friends!"
          />
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <SearchIcon />
          </div>
        </div>
        <div>Icon</div>
      </div>
      <div className=" px-5 flex flex-col w-full h-full overflow-y-auto journal-scroll">
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
        <MessagesItems />
      </div>
    </div>
  );
};

export default MessagesList;
