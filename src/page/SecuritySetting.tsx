import React, { ReactElement } from "react";
import DesktopIcon from "../components/ui/DesktopIcon";
import LaptopIcon from "../components/ui/LaptopIcon";
import PhoneIcon from "../components/ui/PhoneIcon";
import TabletIcon from "../components/ui/TabletIcon";
import MessageIcon from "../components/ui/MessageIcon";
import IconAngleDown from "../components/ui/IconAngleDown";

const SecuritySetting: React.FC = () => {
  return (
    <div className="px-8 pt-8 w-full flex flex-col gap-y-8 overflow-y-auto  journal-scroll">
      <HistoryLogin />
      <ChangePassword />
      <TwoFactorAuth />
    </div>
  );
};

export default SecuritySetting;
interface PropsHistoryCard {
  Icon: ReactElement;
  nameDevice: string;
  browser: string;
  active?: boolean;
}
const HistoryLogin: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="font-bold text-lg">Where You're Logged In</h2>
      <div className="flex gap-5 flex-wrap w-full">
        <HistoryCard
          Icon={<DesktopIcon />}
          nameDevice="Windows PC"
          active={true}
          browser="Chrome"
        />
        <HistoryCard
          Icon={<LaptopIcon />}
          nameDevice="Windows Laptop"
          browser="Chrome"
        />
        <HistoryCard
          Icon={<PhoneIcon />}
          nameDevice="Iphone 11"
          browser="Chrome"
        />
        <HistoryCard
          Icon={<TabletIcon />}
          nameDevice="Ipad Pro 11"
          browser="Chrome"
        />
      </div>
      <span className="text-bluePrimary cursor-pointer font-medium">
        See All
      </span>
    </div>
  );
};
const HistoryCard: React.FC<PropsHistoryCard> = ({
  Icon,
  nameDevice,
  browser,
  active = false,
  ...props
}) => {
  return (
    <div className="cursor-pointer flex gap-x-3 items-center w-[calc(50%-10px)] px-5 py-3 rounded-xl shadow-lg">
      {Icon}
      <div className="flex flex-col gap-y-1 justify-center flex-1">
        <h3 className="text-base font-medium">{`${nameDevice} · Ho Chi Minh, Viet Nam`}</h3>
        <span className="text-grayScale-20">
          {browser}
          {active && <span className="text-greenPrimary"> | Active now</span>}
        </span>
      </div>
    </div>
  );
};
const ChangePassword: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 w-1/2">
      <h2 className="font-bold text-lg">Change Password</h2>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="currentPassword"
            className="font-semibold text-base opacity-80"
          >
            Current Password
          </label>
          <input
            className="outline-none border border-grayScale-20 rounded-lg px-3 py-2"
            type="password"
            name="currentPassword"
            id="currentPassword"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="newPassword"
            className="font-semibold text-base opacity-80"
          >
            New Password
          </label>
          <input
            className="outline-none border border-grayScale-20 rounded-lg px-3 py-2"
            type="password"
            name="newPassword"
            id="newPassword"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="preNewPassword"
            className="font-semibold text-base opacity-80"
          >
            Re-type new Password
          </label>
          <input
            className="outline-none border border-grayScale-20 rounded-lg px-3 py-2"
            type="password"
            name="preNewPassword"
            id="preNewPassword"
          />
        </div>
      </div>
      <a href="/forgot" className="text-bluePrimary font-medium text-sm">
        Forgot Password?
      </a>
      <button className="ml-auto px-6 py-2.5 rounded-lg font-medium text-white bg-bluePrimary">
        Save
      </button>
    </div>
  );
};
const TwoFactorAuth: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 w-full pb-8">
      <h2 className="text-lg font-bold">Two-factor authentication</h2>
      <div className="flex flex-col w-full gap-y-3">
        <span className="font-medium">Text Message (SMS)</span>
        <div className="flex gap-x-3 items-center">
          <div className="scale-125">
            <MessageIcon />
          </div>
          <p>
            Use text message (SMS) to receive verification odes. For your
            protection, phone numbers used for two-factor authentication can't
            be used to reset your password when two-factor is on.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-y-3">
        <span className="font-medium">Phone Number</span>
        <div className="flex gap-x-5">
          <div className="flex border border-grayScale-20 rounded-lg overflow-hidden flex-1">
            <div className="flex gap-x-3 items-center border-r border-grayScale-20 px-3">
              <span>+84</span>
              <div>
                <IconAngleDown />
              </div>
            </div>
            <input
              className="w-full outline-none font-normal px-3 py-2"
              type="text"
              name="phoneNummber"
              id="phoneNummber"
              placeholder="0372663903"
            />
          </div>
          <button className="px-5 py-2 rounded-lg text-white font-medium bg-bluePrimary">
            Active
          </button>
        </div>
      </div>
    </div>
  );
};
