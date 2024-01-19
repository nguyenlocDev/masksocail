import React from "react";

const ViewingSetting: React.FC = () => {
  return (
    <div className="p-8 flex flex-col gap-y-3">
      <h2 className="font-bold text-lg">Viewing and Sharing</h2>
      <FormViewingAwesomeOps title="Who can see your post?" nameOps="post" />
      <FormViewingAwesomeOps
        title="Who can see your profile?"
        nameOps="profile"
      />
      <FormViewingTwoOps
        title="Allow others to share your posts to their Timeline?"
        nameOps="timeline"
        nameTitle="On"
      />
      <FormViewingTwoOps
        title="Who can Follow you?"
        nameOps="follow"
        nameTitle="Everyone"
      />
    </div>
  );
};

export default ViewingSetting;
interface PropsOpsForm {
  title: string;
  nameOps: string;
  nameTitle?: string;
}
const FormViewingAwesomeOps: React.FC<PropsOpsForm> = ({
  title,
  nameOps,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="font-bold text-base">{title}</h3>
      <ul className="flex flex-col gap-y-2 font-medium">
        <li className="flex items-center gap-x-3 ">
          <input
            className="cursor-pointer w-4 h-4"
            type="radio"
            name={nameOps}
            id={`everyone${nameOps}`}
          />
          <label htmlFor={`everyone${nameOps}`} className="cursor-pointer">
            Everyone
          </label>
        </li>
        <li className="flex items-center gap-x-3 ">
          <input
            className="cursor-pointer w-4 h-4"
            type="radio"
            name={nameOps}
            id={`followers${nameOps}`}
          />
          <label htmlFor={`followers${nameOps}`} className="cursor-pointer">
            Followers
          </label>
        </li>
        <li className="flex items-center gap-x-3 ">
          <input
            className="cursor-pointer w-4 h-4"
            type="radio"
            name={nameOps}
            id={`onlyme${nameOps}`}
          />
          <label htmlFor={`onlyme${nameOps}`} className="cursor-pointer">
            Only Me
          </label>
        </li>
      </ul>
    </div>
  );
};
const FormViewingTwoOps: React.FC<PropsOpsForm> = ({
  title,
  nameOps,
  nameTitle,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="font-bold text-base">{title}</h3>
      <ul className="flex flex-col gap-y-2 font-medium">
        <li className="flex items-center gap-x-3 cursor-pointer">
          <input
            className="cursor-pointer w-4 h-4"
            type="radio"
            name={nameOps}
            id={`on${nameOps}`}
          />
          <label htmlFor={`on${nameOps}`} className="cursor-pointer">
            {nameTitle}
          </label>
        </li>
        <li className="flex items-center gap-x-3 cursor-pointer">
          <input
            className="cursor-pointer w-4 h-4"
            type="radio"
            name={nameOps}
            id={`off${nameOps}`}
          />
          <label htmlFor={`off${nameOps}`} className="cursor-pointer">
            Off
          </label>
        </li>
      </ul>
    </div>
  );
};
