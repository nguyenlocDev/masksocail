import React, { ReactElement } from "react";
import ReactDom from "react-dom";
import { CloseIcon } from "../ui/ui";
interface Props {
  title: string;
  children: string | ReactElement;
  showProtal: boolean;
  setShowProtal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Portal: React.FC<Props> = ({
  children,
  title,
  showProtal,
  setShowProtal,
  ...props
}) => {
  if (document === null) return null;
  return ReactDom.createPortal(
    <div className="absolute inset-0 flex  items-center justify-center z-10 text-grayScale">
      <div
        className="bg-grayScale-60 absolute inset-0 "
        onClick={() => setShowProtal(false)}
      ></div>
      <div className="w-[650px] max-h-[650px] flex flex-col fill-grayScale  relative z-10  bg-white rounded-xl overflow-hidden">
        <div className="flex p-5 items-center justify-between border-b border-grayScale-20 font-bold text-lg">
          <h2>{title}</h2>
          <div className="cursor-pointer" onClick={() => setShowProtal(false)}>
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </div>,
    document.querySelector("body") as HTMLBodyElement
  );
};

export default Portal;
