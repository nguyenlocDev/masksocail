import React from "react";
import { OtherIcon } from "../ui/ui";
import MessagesOptions from "./MessagesOptions";
import useClickOutSide from "../../hooks/useClickOutSide";
import useScrollChangeCoord from "../../hooks/useScrollChangeCoord";
interface Props {
  myMessage?: boolean;
}
const MessagesText: React.FC<Props> = ({ myMessage = true, ...props }) => {
  const { show: msgText, setShow: setMsgText, nodeRef } = useClickOutSide();
  const { coord, setCoord } = useScrollChangeCoord(nodeRef);
  const handleShowOps = (e: any) => {
    setCoord(e.target.getBoundingClientRect());
    setMsgText(!msgText);
  };

  return (
    <div
      className={`flex flex-col gap-y-2 relative text-grayScale-60  ${
        myMessage && "items-end"
      }`}
    >
      <div
        className={`flex gap-x-3 w-full items-stretch ${
          myMessage && "flex-row-reverse"
        }`}
      >
        <div className="w-10 flex">
          <img
            className="w-10 h-10 mt-auto object-cover rounded-full"
            src={require("../../asset/img/avatar.jpg")}
            alt=""
          />
        </div>
        <div
          className={`w-3/4 bg-bluePrimary text-white px-5 py-3 rounded-t-xl  ${
            myMessage
              ? "rounded-bl-xl rounded-br-sm"
              : "rounded-br-xl rounded-bl-sm"
          }`}
        >
          <p className="whitespace-pre-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum
            non animi neque placeat, laudantium asperiores! Necessitatibus
            soluta, atque repellendus quibusdam quod tempore eligendi numquam
            debitis, nihil rem possimus odit.
          </p>
        </div>
        <div className="flex items-center relative ">
          <div
            ref={nodeRef}
            className="cursor-pointer hover:bg-grayScale-10 p-3 rounded-full"
            onClick={handleShowOps}
          >
            <OtherIcon />
          </div>
          {msgText && <MessagesOptions coord={coord} />}
        </div>
      </div>
      <span className={`${myMessage ? "mr-[52px]" : "ml-[52px]"} select-none`}>
        9h ago
      </span>
    </div>
  );
};

export default MessagesText;
