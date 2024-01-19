import React from "react";

const FriendsItems = () => {
  return (
    <div className="w-full flex items-center gap-x-3 cursor-pointer ">
      <img
        className="w-10 h-10 object-cover rounded-full "
        src={require("../../asset/img/avatar.jpg")}
        alt="logo"
      />
      <h2 className="font-medium">Kayleigh Bysouth</h2>
      <span className="ml-auto text-sm text-grayScale-60">2 min</span>
    </div>
  );
};

export default FriendsItems;
