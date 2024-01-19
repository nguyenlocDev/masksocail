import React from "react";
import MessagesText from "./MessagesText";

const MessagesChat: React.FC = () => {
  return (
    <div className="p-5 flex flex-col gap-y-10 overflow-y-auto journal-scroll relative">
      <MessagesText />
      <MessagesText myMessage={false} />
      <MessagesText />
      <MessagesText myMessage={false} />
      <MessagesText />
    </div>
  );
};

export default MessagesChat;
