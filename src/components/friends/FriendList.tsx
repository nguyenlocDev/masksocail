import React from "react";
import FriendsItems from "./FriendsItems";

const FriendList: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 w-full overflow-y-auto hiddenScroll2 hiddenScroll1">
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
      <FriendsItems />
    </div>
  );
};

export default FriendList;
