import React from "react";
import StoriesItems from "./StoriesItems";

const StoriesList: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <StoriesItems you={true} />
      <StoriesItems />
      <StoriesItems />
      <StoriesItems />
    </div>
  );
};

export default StoriesList;
