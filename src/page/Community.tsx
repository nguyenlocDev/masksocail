import React, { useEffect } from "react";
import RightBar from "../components/navigationBar/RightBar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Community: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("followers");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="  bg-backgroundPrimary flex-1 flex  p-8 pb-0 gap-x-8 rounded-xl rounded-b-none flex-col ">
        {/* header */}
        <div className="flex items-center bg-white p-3 w-full rounded-2xl shadow-lg  gap-x-5 font-medium mb-5">
          <NavLinkFriends
            path="followers"
            content="300,000 Followers"
          ></NavLinkFriends>
          <NavLinkFriends
            path="following"
            content="500 Following"
          ></NavLinkFriends>
          <NavLinkFriends
            path="suggestions"
            content="People You Might Like"
          ></NavLinkFriends>
        </div>
        {/* list */}
        <div className="grid grid-cols-3 gap-5 overflow-y-auto hiddenScroll1 hiddenScroll2">
          <Outlet />
        </div>
      </div>
      <RightBar />
    </>
  );
};

export default Community;
interface Props {
  content: string;
  path: string;
}
export const NavLinkFriends: React.FC<Props> = (props) => {
  return (
    <NavLink to={props.path} className="w-[calc(100%/3-(40px/3))]">
      {({ isActive }) => (
        <button
          className={`w-full px-5 py-2  rounded-md ${
            isActive
              ? "bg-bluePrimary text-white"
              : " border border-grayScale-20 text-grayScale"
          } `}
        >
          {props.content}
        </button>
      )}
    </NavLink>
  );
};
