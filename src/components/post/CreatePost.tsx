import React from "react";
import { VideoIcon, SmileIcon, PictureIcon } from "../ui/ui";

const CreatePost: React.FC = () => {
  return (
    <div className="w-full p-5 flex flex-col bg-white rounded-2xl shadow-lg">
      <div className="flex gap-x-3 flex-wrap">
        <img
          className="w-11 h-11 object-cover rounded-full "
          src={require("../../asset/img/avatar.jpg")}
          alt="logo"
        />
        <input
          className="p-3 py-2 outline-none border-0 flex-1 rounded-xl bg-grayScale-5 text-grayScale"
          type="text"
          placeholder="What's happening?"
        />
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-x-5 text-grayScale font-medium ">
          <div className="cursor-pointer fill-grayScale flex items-center gap-x-2">
            <VideoIcon></VideoIcon>
            <span>Live Video</span>
          </div>
          <div className="cursor-pointer fill-grayScale flex items-center gap-x-2">
            <PictureIcon></PictureIcon>
            <span>Photo/Video</span>
          </div>
          <div className="cursor-pointer fill-grayScale flex items-center gap-x-2">
            <SmileIcon />
            <span>Feeling</span>
          </div>
        </div>
        <button className="px-8 py-2 bg-bluePrimary text-white font-semibold rounded-lg">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
