import React from "react";
import CalendarIcon from "../components/ui/CalendarIcon";
import IconAngleDown from "../components/ui/IconAngleDown";

const ActivityLogSetting: React.FC = () => {
  return (
    <div className="p-8 flex flex-col gap-y-3 w-full overflow-y-auto journal-scroll">
      <h2 className="text-lg font-bold">Activity Log</h2>
      <FiltersLog />
      <div className="w-1/2 flex flex-col gap-y-3 ">
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
        <ActivityLogCard title="You Reacted to Nabil's post" type="Public" />
      </div>
    </div>
  );
};
export default ActivityLogSetting;
interface PropsCardLog {
  title: string;
  type: string;
}
const FiltersLog: React.FC = () => {
  return (
    <div className="flex justify-between w-1/2">
      <div className="flex gap-x-5 items-center">
        <span className="font-medium">Date: </span>
        <div className="flex items-center gap-x-3 cursor-pointer">
          <label htmlFor="date">1/1/2024</label>
          <input type="text" className="opacity-0 w-0 h-0" />
          <CalendarIcon />
        </div>
      </div>
      <div className="flex gap-x-5 items-center">
        <span className="font-medium">Activity:</span>
        <div className="flex gap-x-3 items-center">
          <span>All</span>
          <div className="cursor-pointer">
            <IconAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
};
const ActivityLogCard: React.FC<PropsCardLog> = ({ title, type, ...props }) => {
  return (
    <div className="flex gap-x-5 w-full items-center cursor-pointer">
      <div>
        <img
          className="w-10 h-10 object-cover rounded-full "
          src={require("../asset/img/avatar.jpg")}
          alt="logo"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{type}</span>
      </div>
    </div>
  );
};
