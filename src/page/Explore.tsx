import React from "react";
import { LinkToIcon } from "../components/ui/ui";

const Explore: React.FC = () => {
  return (
    <div className="bg-backgroundPrimary w-full h-full p-8 pb-0 gap-x-8 rounded-xl rounded-b-none overflow-y-auto text-grayScale">
      <div className="w-full flex flex-wrap -ml-5">
        <CardExpore />
        <CardExpore />
        <CardExpore />
        <CardExpore />
        <CardExpore />
        <CardExpore />
        <CardExpore />
      </div>
    </div>
  );
};

export default Explore;
const CardExpore: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 w-[calc((100%/3-20px))] shadow-md rounded-xl overflow-hidden bg-white ml-5 mb-5">
      <img
        src="https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex gap-x-3 items-center px-5 font-medium">
        <div className="bg-redPrimary/10 px-3 text-redPrimary ">Features</div>
        <span className="text-grayScale-60">Friday 13 August</span>
      </div>
      <div className="px-5 flex flex-col gap-y-3">
        <h2 className="font-bold text-lg">
          How To Choose Best Bike For Spring In Bangladesh?
        </h2>
        <p className="text-sm text-grayScale-60">
          If you ever wish to buy a motorcycle for you than you must think a lot
          before buying...
        </p>
      </div>
      <div className="flex gap-x-3 fill-bluePrimary text-bluePrimary px-5 mb-5 items-center cursor-pointer">
        <span>READ MOME</span>
        <LinkToIcon />
      </div>
    </div>
  );
};
