import React from "react";
interface Props {
  children?: any;
}
const EventsCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl text-grayScale flex flex-col w-full ">
      <div className="w-full flex justify-between px-5 py-3 border-b border-grayScale-20">
        <h2 className="font-semibold">You Might Like</h2>
        <a href="/" className="text-bluePrimary">
          See All
        </a>
      </div>
      {children}
    </div>
  );
};

export default EventsCard;
