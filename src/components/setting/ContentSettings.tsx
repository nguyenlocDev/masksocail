import React, { ReactElement } from "react";
interface Props {
  children: ReactElement;
}
const ContentSettings: React.FC<Props> = ({ children, ...props }) => {
  return <div className="w-[75%] h-full flex ">{children}</div>;
};

export default ContentSettings;
