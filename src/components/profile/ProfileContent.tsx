import React from "react";
import {
  MaleIcon,
  FacebookIcon,
  ExproleIcon,
  BirthdayIcon,
} from "../../components/ui/ui";
import PostContents from "../post/PostContents";
import Events from "../events/Events";
const ProfileContent: React.FC = () => {
  return (
    <div className=" flex p-8 rounded-xl  text-grayScale bg-backgroundPrimary items-start relative">
      <div className="w-[25%] bg-white rounded-xl shadow-xl mr-8 flex flex-col gap-y-3 sticky top-0 ">
        <h2 className="p-5 pb-0 font-medium text-lg">INTRO</h2>
        <ul className="list-none fill-grayScale flex flex-col gap-y-3">
          <li className="flex gap-x-3 px-5 items-center font-medium">
            <ExproleIcon />
            <span>hnl.com</span>
          </li>
          <li className="flex gap-x-3 px-5 items-center font-medium">
            <MaleIcon />
            <span>Male</span>
          </li>
          <li className="flex gap-x-3 px-5 items-center font-medium">
            <BirthdayIcon />
            <span>15/09/2004</span>
          </li>
          <li className="flex gap-x-3 px-5 items-center font-medium">
            <FacebookIcon />
            <span>Hồ Nguyên Lộc</span>
          </li>
        </ul>
        <div className="flex flex-col gap-y-3 px-5 font-medium">
          <span>52,000 Followers</span>
          <span>5,000 Following</span>
        </div>
        <div className="p-5 pt-0 w-full">
          <button className=" w-full rounded-xl font-medium py-2 bg-grayScale-5">
            Edit Details
          </button>
        </div>
      </div>
      <div className="mr-8 w-[50%]">
        <PostContents />
      </div>
      <div className="w-[25%]">
        <Events />
      </div>
    </div>
  );
};

export default ProfileContent;
