import React, { ReactElement, useState } from "react";
import UploadIcon from "../ui/UploadIcon";
import ProfileEditImage from "./ProfileEditImage";
import Portal from "../portal/Portal";
interface ShowOps {
  title: string;
  Element: ReactElement;
}
const ProfileEditInfo: React.FC = () => {
  const [showProtal, setShowProtal] = useState<boolean>(false);
  const [childrenElement, setChildrenElement] = useState<ShowOps>();
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
    <div className="p-5 flex flex-col gap-y-5 overflow-y-auto hiddenScroll1 hiddenScroll2">
      {showProtal && (
        <Portal
          showProtal={showProtal}
          setShowProtal={setShowProtal}
          title={childrenElement?.title as string}
        >
          {childrenElement?.Element as ReactElement}
        </Portal>
      )}
      <div
        className=" relative w-full h-[160px] cursor-pointer  "
        onClick={handleEditCoverImage}
      >
        <div className="absolute rounded-full bg-white flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-1 shadow-sm fill-grayScale">
          <UploadIcon />
        </div>
        <img
          src="https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="cursor-pointer w-full h-full object-cover rounded-t-2xl rounded-b-md"
        />
        <div
          className="absolute w-[80px] h-[80px] p-1 bg-white rounded-full shadow-xl bottom-0 translate-y-1/4  left-8 cursor-pointer"
          onClick={handleEditAvatar}
        >
          <img
            className="w-full h-full object-cover rounded-full cursor-pointer "
            src={require("../../asset/img/avatar.jpg")}
            alt="logo"
          />
          <div className="absolute rounded-full bg-white flex items-center bottom-1 right-1 z-10 p-1 shadow-sm fill-grayScale cursor-pointer">
            <UploadIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex gap-x-5 w-full mb-5 justify-between">
          <div className="flex flex-col gap-y-3  w-full">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-xl px-3 py-2"
              type="text"
              name="name"
              id="name"
              placeholder="Hồ Nguyên Lộc"
            />
          </div>
          <div className="flex flex-col gap-y-3  w-full">
            <label className="font-medium" htmlFor="dateofbirth">
              Date of birth
            </label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-xl px-3 py-2"
              type="text"
              name="dateofbirth"
              id="dateofbirth"
              placeholder="15/09/2004"
            />
          </div>
        </div>
        <div className="flex gap-x-5 w-full mb-5 justify-between">
          <div className="flex flex-col gap-y-3  w-full">
            <label className="font-medium" htmlFor="website">
              Website
            </label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-xl px-3 py-2"
              type="text"
              name="website"
              id="website"
              placeholder="hnl.com"
            />
          </div>
          <div className="flex flex-col gap-y-3  w-full">
            <label className="font-medium" htmlFor="location">
              Location
            </label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-xl px-3 py-2"
              type="text"
              name="location"
              id="location"
              placeholder="Hồ Chí Minh, Việt Nam"
            />
          </div>
        </div>

        <div className="flex gap-x-5 w-full mb-5 justify-between">
          <div className="flex flex-col gap-y-3  w-full">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-xl px-3 py-2"
              type="email"
              name="email"
              id="email"
              placeholder="nguyenloc.tlc.com"
            />
          </div>
          <div className="flex flex-col gap-y-3  w-full">
            <label className="font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-xl px-3 py-2"
              type="text"
              name="phone"
              id="phone"
              placeholder="037*******"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="font-medium" htmlFor="bio">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            placeholder="Developer"
            className="resize-none outline-none border border-grayScale-20 rounded-xl px-3 py-2"
          ></textarea>
        </div>
        <div className="w-full flex justify-end gap-x-3 mt-5 font-semibold">
          <button className="text-grayScale-60">Cancel</button>
          <button className="bg-bluePrimary text-white px-4 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditInfo;
