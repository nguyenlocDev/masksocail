import React from "react";
import { UploadIcon, MinusIcon, PlusIcon } from "../ui/ui";
interface Props {
  title: string;
  height?: string;
}
const ProfileEditImage: React.FC<Props> = ({
  title,
  height = "h-[450px]",
  ...props
}) => {
  return (
    <div className="flex flex-col p-5 gap-y-3">
      <div
        className={`w-full ${height} bg-grayScale-5 rounded-xl flex flex-col gap-y-10 items-center justify-center cursor-pointer`}
      >
        <div className="scale-[5]">
          <UploadIcon />
        </div>
        <span>{title}</span>
      </div>
      <div className="w-full flex">
        <div className="flex w-1/2 gap-x-3 items-center ">
          <div className="cursor-pointer">
            <MinusIcon />
          </div>
          <input
            type="range"
            name="zomm"
            id="zoom"
            min={0}
            max={10}
            step={0.5}
            className="w-full "
          />
          <div className="cursor-pointer">
            <PlusIcon />
          </div>
        </div>
        <button className="px-5 py-2 text-white rounded-lg bg-bluePrimary font-medium ml-auto">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEditImage;
