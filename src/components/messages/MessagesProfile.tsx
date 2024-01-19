import React from "react";
import ReactDOM from "react-dom";
import { IconAngleDown, PictureIcon } from "../ui/ui";
interface Props {
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
}
const MessagesProfile: React.FC<Props> = ({ setShowProfile, ...props }) => {
  if (document === undefined) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-30 text-grayScale">
      <div
        className="absolute inset-0 bg-grayScale-60"
        onClick={() => setShowProfile((value) => !value)}
      ></div>
      <div className="relative max-w-[360px] ml-auto rounded-l-2xl h-full opacity-100 bg-white overflow-y-auto journal-scroll">
        <div className="flex flex-col gap-y-5 10 w-full p-8 items-center  ">
          <div className="bg-grayScale-5 rounded-2xl w-full flex flex-col gap-y-3 items-center justify-center p-8">
            <div className="w-[86px] h-[86px]">
              <img
                className="w-full h-full mt-auto object-cover rounded-full"
                src={require("../../asset/img/avatar.jpg")}
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-lg">Hồ Nguyên Lộc</h2>
              <span className="font-medium text-sm">Developer</span>
            </div>
            <div className="flex gap-x-3 items-center">
              <span className="font-medium">Active now</span>
              <div className="w-3 h-3 rounded-full bg-greenPrimary "></div>
            </div>
          </div>
          <div className="bg-grayScale-5 rounded-2xl w-full flex flex-col gap-y-3 items-center justify-center ">
            <div className="w-full font-bold p-3 border-b border-grayScale-20">
              <h2>Privacy & Support</h2>
            </div>
            <ul className="w-full flex flex-col gap-y-3 px-3 font-medium pb-3">
              <li>
                icon <span>Mute Notification</span>
              </li>
              <li>
                icon <span>Block</span>
              </li>
              <li>
                icon <span>Delete Chat</span>
              </li>
            </ul>
          </div>
          <div className="bg-grayScale-5 rounded-2xl w-full flex flex-col gap-y-3 items-center justify-center ">
            <div className="w-full font-bold p-3 border-b border-grayScale-20">
              <h2>Shared Files</h2>
            </div>
            <div className="w-full flex flex-col gap-y-3 px-3 font-medium pb-3">
              <div className="flex gap-x-3 items-center cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm fill-grayScale">
                  <PictureIcon />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <h3>Photo</h3>
                    <span className="text-xs font-normal">85 file, 195MB</span>
                  </div>
                  <div className="-rotate-90 fill-grayScale">
                    <IconAngleDown></IconAngleDown>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3 items-center cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm fill-grayScale">
                  <PictureIcon />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <h3>Photo</h3>
                    <span className="text-xs font-normal">85 file, 195MB</span>
                  </div>
                  <div className="-rotate-90 fill-grayScale">
                    <IconAngleDown></IconAngleDown>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3 items-center cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm fill-grayScale">
                  <PictureIcon />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <h3>Photo</h3>
                    <span className="text-xs font-normal">85 file, 195MB</span>
                  </div>
                  <div className="-rotate-90 fill-grayScale">
                    <IconAngleDown></IconAngleDown>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-3 items-center cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm fill-grayScale">
                  <PictureIcon />
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <h3>Photo</h3>
                    <span className="text-xs font-normal">85 file, 195MB</span>
                  </div>
                  <div className="-rotate-90 fill-grayScale">
                    <IconAngleDown></IconAngleDown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body") as HTMLElement
  );
};

export default MessagesProfile;
