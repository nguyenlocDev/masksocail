import React from "react";
interface Props {
  you?: boolean;
}
const StoriesItems: React.FC<Props> = ({ you = false, ...props }) => {
  return (
    <div className="border-2 p-1 border-bluePrimary rounded-full relative cursor-pointer ">
      <img
        className="w-11 h-11 object-cover rounded-full "
        src={require("../../asset/img/avatar.jpg")}
        alt="logo"
      />
      {you && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-white w-5 h-5 text-center rounded-full flex items-center justify-center text-xl font-bold border border-grayScale shadow-2xl">
          +
        </span>
      )}
    </div>
  );
};

export default StoriesItems;
