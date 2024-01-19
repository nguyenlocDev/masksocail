import React from "react";
import {
  CommentsIcon,
  GifIcon,
  LikeIcon,
  OtherIcon,
  PictureIcon,
  SendIcon,
  ShareIcon,
  SmileIcon,
} from "../ui/ui";
import PostOptionsCard from "./PostOptionsCard";
import useClickOutSide from "../../hooks/useClickOutSide";
import useScrollChangeCoord from "../../hooks/useScrollChangeCoord";
const Posts: React.FC = () => {
  return (
    <div className="w-full p-5 flex flex-col bg-white rounded-2xl shadow-lg text-grayScale gap-y-5">
      <PostHeader />
      <div>
        <img
          className="w-full h-auto object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1700539945024-b70658176acd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            className="w-5 h-5 object-cover rounded-full "
            src={require("../../asset/img/avatar.jpg")}
            alt="logo"
          />
          <img
            className="w-5 h-5 object-cover rounded-full "
            src={require("../../asset/img/avatar.jpg")}
            alt="logo"
          />
          <img
            className="w-5 h-5 object-cover rounded-full "
            src={require("../../asset/img/avatar.jpg")}
            alt="logo"
          />
          <img
            className="w-5 h-5 object-cover rounded-full "
            src={require("../../asset/img/avatar.jpg")}
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-x-3">
          <span>3 Comments</span>
          <span>17 Share</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-t border-grayScale p-3">
        <div className="flex gap-x-3 items-center cursor-pointer">
          <LikeIcon />
          <span>Like</span>
        </div>
        <div className="flex gap-x-3 items-center cursor-pointer">
          <CommentsIcon />
          <span>Comments</span>
        </div>
        <div className="flex gap-x-3 items-center cursor-pointer">
          <ShareIcon />
          <span>Share</span>
        </div>
      </div>
      <div className="flex items-center first-letter gap-x-4">
        <img
          className="w-11 h-11 object-cover rounded-full "
          src={require("../../asset/img/avatar.jpg")}
          alt="logo"
        />
        <div className="flex-1 relative">
          <input
            className="p-3 py-2 bg-grayScale-5 rounded-xl w-full border-0 outline-none"
            type="text"
            placeholder="Write a comment..."
          />
          <div className="flex gap-x-2 items-center absolute top-1/2 -translate-y-1/2 right-3 ">
            <GifIcon />
            <PictureIcon />
            <SmileIcon />
          </div>
        </div>
        <div className=" flex items-center justify-center p-3  bg-bluePrimary/10 rounded-lg cursor-pointer">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default Posts;
const PostHeader: React.FC = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const { coord, setCoord } = useScrollChangeCoord(nodeRef);
  const handleShowOpstion = (e: any) => {
    setCoord(e.target.getBoundingClientRect());
    setShow(!show);
  };

  return (
    <div className="relative flex items-center justify-between">
      {show && <PostOptionsCard coord={coord}></PostOptionsCard>}
      <div className="flex items-center gap-x-3 ">
        <img
          className="w-11 h-11 object-cover rounded-full "
          src={require("../../asset/img/avatar.jpg")}
          alt="logo"
        />
        <div className="flex flex-col">
          <h3 className="text-base font-medium"> Hồ Nguyên Lộc</h3>
          <span className="text-sm text-grayScale-60">2h. Public</span>
        </div>
      </div>
      <div ref={nodeRef} className="cursor-pointer" onClick={handleShowOpstion}>
        <OtherIcon></OtherIcon>
      </div>
    </div>
  );
};
