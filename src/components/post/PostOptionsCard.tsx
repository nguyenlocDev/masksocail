import React from "react";
import ReactDom from "react-dom";
import EditIcon from "../ui/EditIcon";
import LinkIcon from "../ui/LinkIcon";
import NotificationIcon from "../ui/NotificationIcon";
import ExproleIcon from "../ui/ExproleIcon";
import PinIcon from "../ui/PinIcon";
import DeleteIcon from "../ui/DeleteIcon";
interface Props {
  coord: any;
}
const PostOptionsCard: React.FC<Props> = ({ coord, ...props }) => {
  if (document === undefined) return null;
  return ReactDom.createPortal(
    <div
      className="absolute w-[350px] bg-white rounded-xl fill-grayScale text-grayScale font-medium p-3  -translate-x-full"
      style={{ top: coord.top + coord.height, left: coord.left }}
    >
      <ul className="flex flex-col gap-y-3">
        <li className="flex gap-x-5 items-center cursor-pointer hover:bg-grayScale-5 rounded-lg px-5 py-2">
          <EditIcon />
          <span>Edit post</span>
        </li>
        <li className="flex gap-x-5 items-center cursor-pointer hover:bg-grayScale-5 rounded-lg px-5 py-2">
          <DeleteIcon />
          <span>Delete post</span>
        </li>
        <li className="flex gap-x-5 items-center cursor-pointer hover:bg-grayScale-5 rounded-lg px-5 py-2">
          <PinIcon />
          <span>Pin to my profile</span>
        </li>
        <li className="flex gap-x-5 items-center cursor-pointer hover:bg-grayScale-5 rounded-lg px-5 py-2">
          <NotificationIcon />
          <span>Turn on notification for this post</span>
        </li>
        <li className="flex gap-x-5 items-center cursor-pointer hover:bg-grayScale-5 rounded-lg px-5 py-2">
          <ExproleIcon />
          <span>Edit audience</span>
        </li>
        <li className="flex gap-x-5 items-center cursor-pointer hover:bg-grayScale-5 rounded-lg px-5 py-2">
          <LinkIcon />
          <span>Copy link</span>
        </li>
      </ul>
    </div>,
    document.querySelector("body") as HTMLBodyElement
  );
};

export default PostOptionsCard;
