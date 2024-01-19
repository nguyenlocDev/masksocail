import React from "react";
import ReactDom from "react-dom";
interface Props {
  coord: any;
}
const MessagesOptions: React.FC<Props> = ({ coord, ...props }) => {
  if (document === undefined) return null;
  return ReactDom.createPortal(
    <div
      className="p-1  text-grayScale font-medium bg-white flex rounded-xl flex-col gap-y-3 w-[150px] h-[150px] list-none shadow-xl absolute z-30"
      style={{ top: coord.top + coord.height, left: coord.left }}
    >
      <li className="cursor-pointer rounded-xl hover:bg-grayScale-5 px-3 py-2">
        Reply
      </li>
      <li className="cursor-pointer rounded-xl hover:bg-grayScale-5 px-3 py-2">
        Forward
      </li>
      <li className="cursor-pointer rounded-xl hover:bg-grayScale-5 px-3 py-2">
        Delete
      </li>
    </div>,
    document.querySelector("body") as HTMLElement
  );
};

export default MessagesOptions;
