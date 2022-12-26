import React from "react";
import Boy from "../assests/Group 633.png";

const Welcome = () => {
  return (
    
    <div className=" bg-[#FE7524]  h-screen w-[850px] md:block hidden" >
      <img src={Boy} alt="boy" className="object-cover w-[630px] mt-24 ml-20   " />
    </div>
  );
};

export default Welcome;
