import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white flex-col">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRt9yxjHKAdwLyscKxFIpiYb6UaP5Iey68Cdk0L1-nqNcPK4aSHPnt5o7uenVECVVirQ&usqp=CAU"
        alt="notFound"
        className=" object-cover w-[400px] h-[400px]"
      />
      <Link to="/">
        <button className="px-5 py-2 bg-bluePrimary rounded-lg text-white font-semibold">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
