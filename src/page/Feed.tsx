import React from "react";

import RightBar from "../components/navigationBar/RightBar";
import Events from "../components/events/Events";
import PostContents from "../components/post/PostContents";

const Feed: React.FC = () => {
  return (
    <>
      <div className="  bg-backgroundPrimary flex-1 flex  p-8 pb-0 gap-x-8 rounded-xl rounded-b-none">
        <div className="flex w-[75%] overflow-y-auto hiddenScroll1 hiddenScroll2">
          <PostContents />
        </div>
        <div className="flex overflow-y-auto hiddenScroll1 hiddenScroll2 ">
          <Events />
        </div>
      </div>
      <RightBar />
    </>
  );
};

export default Feed;
