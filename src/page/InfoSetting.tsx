import React from "react";
import CalendarIcon from "../components/ui/CalendarIcon";
import IconAngleDown from "../components/ui/IconAngleDown";

const InfoSetting: React.FC = () => {
  return (
    <div className="w-full flex flex-col overflow-y-auto journal-scroll">
      <div className="flex w-full flex-col gap-y-5 px-8">
        <div className="py-8 pb-0 font-bold text-lg">
          <h2>Edit Profile</h2>
        </div>
        <div className="flex justify-between items-center gap-x-10">
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Hồ Nguyên Lộc"
            />
          </div>
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <label htmlFor="birthday">Birthday</label>
            <div className="relative w-full">
              <input
                className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
                type="text"
                name="birthday"
                id="birthday"
                placeholder="15/09/04"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <CalendarIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-10">
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <label htmlFor="email">Email</label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
              type="email"
              name="email"
              id="email"
              placeholder="nguyenloc.tlc@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <label htmlFor="bio">Bio</label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
              type="text"
              name="bio"
              id="bio"
              placeholder="Developer"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-10">
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <label htmlFor="phoneNummber">Phone Number</label>
            <div className="flex border border-grayScale-20 rounded-lg overflow-hidden">
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
          </div>
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <label htmlFor="website">Website</label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
              type="text"
              name="website"
              id="website"
              placeholder="hnl.com"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-10">
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <span>Gender</span>
            <div className="flex px-3 justify-between items-center border border-grayScale-20 rounded-lg py-2">
              <div className="flex items-center gap-x-3 ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="radio"
                  name="gender"
                  id="male"
                />
                <label htmlFor="male" className="cursor-pointer">
                  Male
                </label>
              </div>
              <div className="flex items-center gap-x-3 ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="radio"
                  name="gender"
                  id="female"
                />
                <label htmlFor="female" className="cursor-pointer">
                  Female
                </label>
              </div>
              <div className="flex items-center gap-x-3 ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="radio"
                  name="gender"
                  id="other"
                />
                <label htmlFor="other" className="cursor-pointer">
                  other
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 font-medium w-full">
            <label htmlFor="location">Location</label>
            <input
              className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
              type="text"
              name="location"
              id="location"
              placeholder="Ho Chi Minh, Viet Nam"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="p-8 pb-0 font-bold text-lg">
          <h2>Socail Link</h2>
        </div>
        <div className="px-8 flex flex-col gap-y-5 mb-5 ">
          <div className="flex justify-between items-center gap-x-10">
            <div className="flex flex-col gap-y-3 font-medium w-full">
              <label htmlFor="email">Email</label>
              <input
                className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
                type="email"
                name="email"
                id="email"
                placeholder="nguyenloc.tlc@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-y-3 font-medium w-full">
              <label htmlFor="bio">Bio</label>
              <input
                className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
                type="text"
                name="bio"
                id="bio"
                placeholder="Developer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-10">
            <div className="flex flex-col gap-y-3 font-medium w-full">
              <label htmlFor="email">Email</label>
              <input
                className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
                type="email"
                name="email"
                id="email"
                placeholder="nguyenloc.tlc@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-y-3 font-medium w-full">
              <label htmlFor="bio">Bio</label>
              <input
                className="w-full outline-none border border-grayScale-20 rounded-lg font-normal px-3 py-2"
                type="text"
                name="bio"
                id="bio"
                placeholder="Developer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end p-5 gap-x-5">
        <button className="cursor-pointer">Cancel</button>
        <button className="cursor-pointer bg-bluePrimary text-white rounded-lg px-5 py-3">
          Save
        </button>
      </div>
    </div>
  );
};

export default InfoSetting;
