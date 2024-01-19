import React from "react";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileContent from "../components/profile/ProfileContent";

const Profile: React.FC = () => {
  return (
    <div className="flex relative flex-col gap-y-8 w-full flex-1 p-8 pb-0 rounded-xl rounded-b-none text-grayScale overflow-y-auto ">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};

export default Profile;
