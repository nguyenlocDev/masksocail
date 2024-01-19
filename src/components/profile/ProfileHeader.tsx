import React, { ReactElement, useState } from "react";
import { EditIcon, EyeIcon, UploadIcon } from "../../components/ui/ui";
import ProfileEditInfo from "./ProfileEditInfo";
import Portal from "../portal/Portal";
import ProfileEditImage from "./ProfileEditImage";
interface ShowOps {
  title: string;
  Element: ReactElement;
}
const ProfileHeader: React.FC = () => {
  const [showProtal, setShowProtal] = useState<boolean>(false);
  const [childrenElement, setChildrenElement] = useState<ShowOps>({
    title: "Edit basic info",
    Element: <ProfileEditInfo />,
  });
  const handleEditProfile = () => {
    setChildrenElement({
      title: "Edit basic info",
      Element: <ProfileEditInfo />,
    });
    setShowProtal(true);
  };
  const handleEditAvatar = () => {
    setChildrenElement({
      title: "Edit avatar",
      Element: <ProfileEditImage title="Upload avatar now!" />,
    });
    setShowProtal(true);
  };
  const handleEditCoverImage = () => {
    setChildrenElement({
      title: "Edit Cover Photo",
      Element: (
        <ProfileEditImage title="Upload cover photo now!" height="h-[250px]" />
      ),
    });
    setShowProtal(true);
  };
  return (
    <div className="flex-shrink-0 flex flex-col w-full h-[484px] rounded-xl shadow-md overflow-hidden">
      {showProtal && (
        <Portal
          showProtal={showProtal}
          setShowProtal={setShowProtal}
          title={childrenElement.title}
        >
          {childrenElement.Element}
        </Portal>
      )}
      <div className="w-full max-h-[350px] relative">
        <img
          src="https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover rounded-t-2xl rounded-b-md"
        />
        <div
          className="absolute bottom-5 right-5 bg-white z-10 px-3 py-2 rounded-lg shadow-lg font-medium cursor-pointer flex gap-x-3 fill-grayScale items-center  "
          onClick={handleEditCoverImage}
        >
          <EditIcon />
          <span>Edit Cover Photo</span>
        </div>
      </div>
      <div className="relative flex justify-between items-center w-full h-full bg-white px-8">
        <div className="absolute w-[150px] h-[150px] p-1 bg-white rounded-full shadow-xl top-0 -translate-y-3/4 left-8">
          <img
            className="w-full h-full object-cover rounded-full "
            src={require("../../asset/img/avatar.jpg")}
            alt="logo"
          />
          <div
            className="absolute rounded-full bg-white flex items-center bottom-3 right-3 z-10 p-1 shadow-sm fill-grayScale cursor-pointer"
            onClick={handleEditAvatar}
          >
            <UploadIcon />
          </div>
        </div>
        <div className="flex flex-col gap-x-2 font-bold">
          <h1 className="text-2xl">Hồ Nguyên Lộc</h1>
          <span className="font-medium text-lg text-grayScale-60">
            Developer
          </span>
        </div>
        <div className="flex gap-x-5 fill-grayScale items-center">
          <div className="cursor-pointer">
            <EyeIcon />
          </div>
          <button
            className="px-3 py-2 bg-grayScale-5 rounded-lg font-medium"
            onClick={handleEditProfile}
          >
            Edit basic info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
