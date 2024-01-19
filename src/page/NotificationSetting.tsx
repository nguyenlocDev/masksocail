import React from "react";
import LoveIconNoti from "../components/ui/LoveIconNoti";
import CommentsIconNoti from "../components/ui/CommentsIconNoti";
import UsersIconNoti from "../components/ui/UsersIconNoti";
import PostNotiIcon from "../components/ui/PostNotiIcon";
import ShareIconNoti from "../components/ui/ShareIconNoti";

const NotificationSetting: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 p-8 w-[30%]">
      <h2 className="text-lg font-bold">Notification</h2>
      <div className="flex flex-col">
        <span className="mb-5">What Notifications You Receive</span>
        <ul className="flex flex-col gap-y-5 font-medium">
          <li className="flex w-full items-center gap-x-3">
            <LoveIconNoti />
            <span>Like</span>
            <label htmlFor="like" className="relative ml-auto h-full group">
              <input
                type="checkbox"
                name="like"
                id="like"
                className="opacity-0 w-0 h-0 absolute peer"
              />
              <div className="absolute yop-0 left-0 w-12 h-full cursor-pointer bg-white border-2 border-grayScale-40 rounded-full z-20 before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-0.5 before:bg-grayScale-40 before:-translate-y-1/2 peer-checked:bg-bluePrimary peer-checked:before:bg-white peer-checked:before:right-0.5 peer-checked:before:left-auto peer-checked:border-0 transition-all  ease-in"></div>
            </label>
          </li>
          <li className="flex w-full items-center gap-x-3">
            <CommentsIconNoti />
            <span>Comments</span>

            <label htmlFor="comment" className="relative ml-auto h-full group">
              <input
                type="checkbox"
                name="comment"
                id="comment"
                className="opacity-0 w-0 h-0 absolute peer"
              />
              <div className="absolute yop-0 left-0 w-12 h-full cursor-pointer bg-white border-2 border-grayScale-40 rounded-full z-20 before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-0.5 before:bg-grayScale-40 before:-translate-y-1/2 peer-checked:bg-bluePrimary peer-checked:before:bg-white peer-checked:before:right-0.5 peer-checked:before:left-auto peer-checked:border-0 transition-all  ease-in"></div>
            </label>
          </li>
          <li className="flex w-full items-center gap-x-3">
            <UsersIconNoti />
            <span>Mention</span>

            <label htmlFor="mention" className="relative ml-auto h-full group">
              <input
                type="checkbox"
                name="mention"
                id="mention"
                className="opacity-0 w-0 h-0 absolute peer"
              />
              <div className="absolute yop-0 left-0 w-12 h-full cursor-pointer bg-white border-2 border-grayScale-40 rounded-full z-20 before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-0.5 before:bg-grayScale-40 before:-translate-y-1/2 peer-checked:bg-bluePrimary peer-checked:before:bg-white peer-checked:before:right-0.5 peer-checked:before:left-auto peer-checked:border-0 transition-all  ease-in"></div>
            </label>
          </li>
          <li className="flex w-full items-center gap-x-3">
            <PostNotiIcon />
            <span>Post</span>

            <label htmlFor="post" className="relative ml-auto h-full group">
              <input
                type="checkbox"
                name="post"
                id="post"
                className="opacity-0 w-0 h-0 absolute peer"
              />
              <div className="absolute yop-0 left-0 w-12 h-full cursor-pointer bg-white border-2 border-grayScale-40 rounded-full z-20 before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-0.5 before:bg-grayScale-40 before:-translate-y-1/2 peer-checked:bg-bluePrimary peer-checked:before:bg-white peer-checked:before:right-0.5 peer-checked:before:left-auto peer-checked:border-0 transition-all  ease-in"></div>
            </label>
          </li>
          <li className="flex w-full items-center gap-x-3">
            <ShareIconNoti />
            <span>Share</span>

            <label htmlFor="share" className="relative ml-auto h-full group">
              <input
                type="checkbox"
                name="share"
                id="share"
                className="opacity-0 w-0 h-0 absolute peer"
              />
              <div className="absolute yop-0 left-0 w-12 h-full cursor-pointer bg-white border-2 border-grayScale-40 rounded-full z-20 before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-0.5 before:bg-grayScale-40 before:-translate-y-1/2 peer-checked:bg-bluePrimary peer-checked:before:bg-white peer-checked:before:right-0.5 peer-checked:before:left-auto peer-checked:border-0 transition-all  ease-in"></div>
            </label>
          </li>
          <li className="flex w-full items-center gap-x-3">
            <PostNotiIcon />
            <span>Event</span>

            <label htmlFor="toogle" className="relative ml-auto h-full group">
              <input
                type="checkbox"
                name="toogle"
                id="toogle"
                className="opacity-0 w-0 h-0 absolute peer"
              />
              <div className="absolute yop-0 left-0 w-12 h-full cursor-pointer bg-white border-2 border-grayScale-40 rounded-full z-20 before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-0.5 before:bg-grayScale-40 before:-translate-y-1/2 peer-checked:bg-bluePrimary peer-checked:before:bg-white peer-checked:before:right-0.5 peer-checked:before:left-auto peer-checked:border-0 transition-all  ease-in"></div>
            </label>
          </li>
          <li className="flex w-full items-center gap-x-3">
            <UsersIconNoti />
            <span>Follow</span>

            <label htmlFor="follow" className="relative ml-auto h-full group">
              <input
                type="checkbox"
                name="follow"
                id="follow"
                className="opacity-0 w-0 h-0 absolute peer"
              />
              <div className="absolute yop-0 left-0 w-12 h-full cursor-pointer bg-white border-2 border-grayScale-40 rounded-full z-20 before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-0.5 before:bg-grayScale-40 before:-translate-y-1/2 peer-checked:bg-bluePrimary peer-checked:before:bg-white peer-checked:before:right-0.5 peer-checked:before:left-auto peer-checked:border-0 transition-all  ease-in"></div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationSetting;
