import React from "react";
import { ExproleIcon, FacebookIcon } from "../ui/ui";

const SocialList: React.FC = () => {
  return (
    <div className="flex w-full gap-x-3 items-center justify-center ">
      <a href="/" className="fill-grayScale">
        <ExproleIcon />
      </a>
      <a href="/" className="fill-grayScale">
        <FacebookIcon />
      </a>
      <a href="/" className="fill-grayScale">
        <ExproleIcon />
      </a>
      <a href="/" className="fill-grayScale">
        <ExproleIcon />
      </a>
    </div>
  );
};

export default SocialList;
