import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const PostContents: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-y-8 fill-grayScale">
      <CreatePost />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default PostContents;
