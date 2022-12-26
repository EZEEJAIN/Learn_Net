import React from "react";
import Google from "../assests/google.png";

const Buttons1 = () => {
  return (
    <div className=" space-y-5 ">
      <div className="flex items-center justify-center space-x-2  ring-1 rounded-2xl py-2 text-[#000000] text-sm font-medium ring-[#151515] ">
        <img src={Google} alt="" />
        <button >
          Sign in with Google
        </button>
      </div>
      
      <div className="flex items-center justify-center space-x-2 ring-1 rounded-2xl py-2 text-[#000000] text-sm font-medium ring-[#151515] ">
        <img src={Google} alt="google"/>
        <button>
           Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Buttons1;
