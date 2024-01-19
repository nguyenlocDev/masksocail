import React from "react";

const MessagesItems: React.FC = () => {
  return (
    <div className="flex p-5 items-center gap-x-3 w-full h-20 rounded-2xl hover:bg-grayScale-5 cursor-pointer">
      <div className="relative w-12 h-12 flex-shrink-0">
        <div className=" absolute z-20 w-4 h-4 rounded-full bg-greenPrimary right-0 border-2 border-white  bottom-0"></div>
        <img
          className="w-full h-full object-cover rounded-full "
          src={require("../../asset/img/avatar.jpg")}
          alt=""
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col justify-center w-2/3 overflow-hidden ">
          <h2 className="font-medium whitespace-nowrap overflow-ellipsis overflow-hidden">
            Hồ Nguyên Lộc
          </h2>
          <span className="text-grayScale-60 whitespace-nowrap overflow-ellipsis overflow-hidden">
            I am in seasdadasdasdasde m
          </span>
        </div>
        <span>11:15 am</span>
      </div>
    </div>
  );
};

export default MessagesItems;
