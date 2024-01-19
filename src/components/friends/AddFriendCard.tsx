import React from "react";
import SocialList from "../info/SocialList";
const AddFriendCard = () => {
  return (
    <div className="p-5 w-full flex flex-col gap-y-3 justify-center text-grayScale">
      <div className="w-full flex gap-x-3">
        <img
          className="w-11 h-11 object-cover rounded-full "
          src={require("../../asset/img/avatar.jpg")}
          alt="logo"
        />
        <div className="flex flex-col">
          <h3 className="text-base font-medium"> Hồ Nguyên Lộc</h3>
          <span className="text-sm text-grayScale-60">
            Founder & CEO at Mask
          </span>
        </div>
      </div>
      <SocialList />
      <div className="flex w-full justify-between gap-x-5">
        <button className="w-full px-5 py-3 border border-grayScale-20 font-semibold rounded-xl text-grayScale-60">
          Ignore
        </button>
        <button className="w-full px-5 py-3 text-white bg-bluePrimary rounded-xl font-semibold">
          Follow
        </button>
      </div>
    </div>
  );
};

export default AddFriendCard;
