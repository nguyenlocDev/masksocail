import React from "react";
import { BirthdayIcon, SendIcon } from "../ui/ui";
const BrithdayCard = () => {
  return (
    <div className="p-5 w-full flex flex-col gap-y-3 justify-center">
      <div className="w-full flex gap-x-3">
        <img
          className="w-11 h-11 object-cover rounded-md "
          src={require("../../asset/img/avatar.jpg")}
          alt="logo"
        />
        <div className="flex flex-col">
          <h3 className="text-base font-medium"> Hồ Nguyên Lộc</h3>
          <span className="text-sm text-grayScale-60">Birthday today</span>
        </div>
      </div>
      <div className="flex w-full gap-x-3 items-center">
        <input
          type="text"
          placeholder="Write on his inbox"
          className="w-full outline-none border-0 bg-grayScale-5 rounded-lg px-3 py-2 "
        />
        <div className=" flex items-center  justify-center p-3  bg-bluePrimary/10 rounded-lg cursor-pointer">
          <SendIcon />
        </div>
      </div>
      <div className="flex w-full  bg-grayScale-3 rounded-lg p-3 gap-x-5  ">
        <div className="w-12 h-12 flex items-center justify-center bg-yellowPrimary/10 rounded-lg flex-shrink-0">
          <BirthdayIcon />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-medium">Upcoming birthdays</h2>
          <span className="text-sm text-grayScale-60">
            See 12 others have upcoming birthdays
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrithdayCard;
