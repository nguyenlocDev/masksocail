import React from "react";
import MessagesList from "../components/messages/MessagesList";
import MessagesContent from "../components/messages/MessagesContent";

const Messages: React.FC = () => {
  return (
    <div className="  bg-backgroundPrimary flex-1 flex  p-8 pb-0 gap-x-8 rounded-xl rounded-b-none">
      <MessagesList />
      <MessagesContent />
    </div>
  );
};

export default Messages;
