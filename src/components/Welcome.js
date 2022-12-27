import React from "react";
import Boy from "../assests/Group 633.png";

const Welcome = () => {
  return (
    <div className=" bg-[#FE7524] h-screen md:flex hidden w-screen items-center justify-center">
        <img
          src={Boy}
          alt="boy"
          // className="object-cover w-[630px] mt-44 lg:mt-32  md:mt-60 md:mr-20 ml-4 md:ml-7"
          className="h-[250px] w-[300px] object-contain"
        />
    </div>
  );
};

export default Welcome;
