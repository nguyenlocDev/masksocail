import React from "react";
import IconAngleDown from "../components/ui/IconAngleDown";

const LanguageSetting: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 p-8">
      <div className="text-lg font-bold">
        <h2>Language</h2>
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-medium">Edit Language Mask Socail.</h3>
        <div className="flex justify-between px-3 py-2 rounded-lg border items-center cursor-pointer border-grayScale-20">
          <span>English</span>
          <div>
            <IconAngleDown />
          </div>
        </div>
        <div className="w-full flex p-5 gap-x-5">
          <button className="cursor-pointer">Cancel</button>
          <button className="cursor-pointer bg-bluePrimary text-white rounded-lg px-5 py-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSetting;
