import React from "react";
import Boy from "../assests/Group 633.png";

const Welcome = () => {
  return (
    
    <div className=" bg-[#FE7524]  h-screen w-[850px] md:block hidden justify-center" >
      <img src={Boy} alt="boy" className="object-cover w-[630px] mt-44 lg:mt-32  md:mt-60 md:mr-20 ml-4 md:ml-7" />
    </div>
  );
};

export default Welcome;
